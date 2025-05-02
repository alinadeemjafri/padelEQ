import { 
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
  DocumentReference,
  QueryConstraint,
  addDoc,
  serverTimestamp,
  writeBatch
} from 'firebase/firestore';
import { db } from '../firebase';
import type { 
  User,
  Match,
  Analysis,
  CoachProfile,
  Review,
  PlayerStats,
  Notification,
  Availability
} from '../types/database';

// Users
export const createUser = async (uid: string, userData: Partial<User>) => {
  const userRef = doc(db, 'users', uid);
  await setDoc(userRef, {
    ...userData,
    createdAt: Timestamp.now()
  });
};

export const getUser = async (uid: string) => {
  const userRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);
  return userSnap.exists() ? userSnap.data() as User : null;
};

// Matches
export const createMatch = async (matchData: Omit<Match, 'id' | 'submittedAt' | 'lastUpdated'>) => {
  const matchesRef = collection(db, 'matches');
  const matchRef = doc(matchesRef);
  const match: Match = {
    ...matchData,
    id: matchRef.id,
    submittedAt: Timestamp.now(),
    lastUpdated: Timestamp.now(),
    status: 'pending'
  };
  await setDoc(matchRef, match);
  return match;
};

export const getPlayerMatches = async (playerId: string) => {
  const q = query(
    collection(db, 'matches'),
    where('playerId', '==', playerId),
    orderBy('submittedAt', 'desc')
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data() as Match);
};

export const getCoachMatches = async (coachId: string) => {
  const q = query(
    collection(db, 'matches'),
    where('coachId', '==', coachId),
    where('status', '!=', 'completed'),
    orderBy('status'),
    orderBy('submittedAt', 'asc')
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data() as Match);
};

// Coach Profiles
export const createCoachProfile = async (coachProfile: Omit<CoachProfile, 'rating' | 'reviewCount'>) => {
  const profileRef = doc(db, 'coachProfiles', coachProfile.userId);
  const profile: CoachProfile = {
    ...coachProfile,
    rating: 0,
    reviewCount: 0
  };
  await setDoc(profileRef, profile);
  return profile;
};

export const getCoachProfile = async (userId: string) => {
  const profileRef = doc(db, 'coachProfiles', userId);
  const profileSnap = await getDoc(profileRef);
  return profileSnap.exists() ? profileSnap.data() as CoachProfile : null;
};

// Analysis
export const createAnalysis = async (analysisData: Omit<Analysis, 'id' | 'createdAt'>) => {
  const analysisRef = doc(collection(db, 'analysis'));
  const analysis: Analysis = {
    ...analysisData,
    id: analysisRef.id,
    createdAt: Timestamp.now()
  };
  await setDoc(analysisRef, analysis);
  
  // Update match status
  const matchRef = doc(db, 'matches', analysisData.matchId);
  await updateDoc(matchRef, {
    status: 'completed',
    lastUpdated: Timestamp.now()
  });
  
  return analysis;
};

export const getMatchAnalysis = async (matchId: string) => {
  const q = query(
    collection(db, 'analysis'),
    where('matchId', '==', matchId)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data() as Analysis);
};

// Player Stats
export const updatePlayerStats = async (playerId: string, updates: Partial<PlayerStats>) => {
  const statsRef = doc(db, 'playerStats', playerId);
  const statsSnap = await getDoc(statsRef);
  
  if (statsSnap.exists()) {
    await updateDoc(statsRef, updates);
  } else {
    await setDoc(statsRef, {
      playerId,
      matchesSubmitted: 0,
      analysisReceived: 0,
      activeStreak: 0,
      lastSubmission: Timestamp.now(),
      ...updates
    });
  }
};

// Notifications
export const createNotification = async (notification: Omit<Notification, 'id' | 'createdAt' | 'read'>) => {
  const notifRef = doc(collection(db, 'notifications'));
  const notif: Notification = {
    ...notification,
    id: notifRef.id,
    createdAt: Timestamp.now(),
    read: false
  };
  await setDoc(notifRef, notif);
  return notif;
};

export const getUserNotifications = async (userId: string, unreadOnly = false) => {
  const constraints: QueryConstraint[] = [
    where('userId', '==', userId),
    orderBy('createdAt', 'desc'),
    limit(50)
  ];
  
  if (unreadOnly) {
    constraints.push(where('read', '==', false));
  }
  
  const q = query(collection(db, 'notifications'), ...constraints);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data() as Notification);
};

export const markNotificationRead = async (notificationId: string) => {
  const notifRef = doc(db, 'notifications', notificationId);
  await updateDoc(notifRef, { read: true });
};

export const getCoachReviews = async (coachId: string): Promise<Review[]> => {
  try {
    const reviewsRef = collection(db, 'reviews');
    const q = query(reviewsRef, where('coachId', '==', coachId));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Review[];
  } catch (error) {
    console.error('Error fetching coach reviews:', error);
    throw error;
  }
};

export const submitReview = async (reviewData: Omit<Review, 'id' | 'createdAt'>): Promise<Review> => {
  try {
    const reviewsRef = collection(db, 'reviews');
    const reviewDoc = await addDoc(reviewsRef, {
      ...reviewData,
      createdAt: serverTimestamp()
    });
    
    const newReview = await getDoc(reviewDoc);
    return {
      id: newReview.id,
      ...newReview.data()
    } as Review;
  } catch (error) {
    console.error('Error submitting review:', error);
    throw error;
  }
};

export const submitMatch = async (matchData: Omit<Match, 'id' | 'createdAt'>): Promise<Match> => {
  try {
    const matchesRef = collection(db, 'matches');
    const matchDoc = await addDoc(matchesRef, {
      ...matchData,
      createdAt: serverTimestamp()
    });
    
    const newMatch = await getDoc(matchDoc);
    return {
      id: newMatch.id,
      ...newMatch.data()
    } as Match;
  } catch (error) {
    console.error('Error submitting match:', error);
    throw error;
  }
};

export const getCoachAvailability = async (coachId: string): Promise<Availability[]> => {
  try {
    const availabilityRef = collection(db, 'availability');
    const q = query(availabilityRef, where('coachId', '==', coachId));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Availability[];
  } catch (error) {
    console.error('Error fetching coach availability:', error);
    throw error;
  }
};

export const updateAvailability = async (coachId: string, slots: Omit<Availability, 'id'>[]): Promise<void> => {
  try {
    const batch = writeBatch(db);
    const availabilityRef = collection(db, 'availability');
    
    // Delete existing slots
    const existingSlots = await getDocs(query(availabilityRef, where('coachId', '==', coachId)));
    existingSlots.docs.forEach(doc => {
      batch.delete(doc.ref);
    });
    
    // Add new slots
    slots.forEach(slot => {
      const newSlotRef = doc(availabilityRef);
      batch.set(newSlotRef, {
        ...slot,
        coachId,
        createdAt: serverTimestamp()
      });
    });
    
    await batch.commit();
  } catch (error) {
    console.error('Error updating availability:', error);
    throw error;
  }
}; 