import { auth, db } from '../firebase';
import {
  createUser,
  getUser,
  createMatch,
  getPlayerMatches,
  createCoachProfile,
  getCoachProfile,
  createAnalysis,
  getMatchAnalysis,
  updatePlayerStats,
  createNotification,
  getUserNotifications,
  markNotificationRead
} from '../services/database';
import { Timestamp, doc, getDoc } from 'firebase/firestore';

export const testDatabaseOperations = async () => {
  try {
    console.log('🧪 Starting database tests...');

    // Get current user
    const currentUser = auth.currentUser;
    if (!currentUser) {
      console.error('❌ No user logged in');
      throw new Error('No user logged in. Please sign in first.');
    }
    console.log('✅ Current user:', currentUser.email);

    // Check if user exists in Firestore and get their role
    console.log('👤 Checking user in Firestore...');
    const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
    const userData = userDoc.data();
    console.log('Current user data:', userData);
    
    if (!userData) {
      console.log('👤 Creating new user...');
      try {
        // Create a user
        await createUser(currentUser.uid, {
          uid: currentUser.uid,
          email: currentUser.email!,
          role: 'player',
          firstName: 'Test',
          lastName: 'Player',
          createdAt: Timestamp.now()
        });
        console.log('✅ User created successfully');
      } catch (error) {
        console.error('❌ Error creating user:', error);
        throw new Error('Failed to create user record');
      }
    } else {
      console.log('✅ Using existing user:', userData);
    }

    // Verify user
    console.log('🔍 Verifying user...');
    const user = await getUser(currentUser.uid);
    if (!user) {
      console.error('❌ User verification failed');
      throw new Error('Failed to create/retrieve user');
    }
    console.log('✅ User verified:', user);

    // Test operations based on user role
    if (user.role === 'player') {
      console.log('🎥 Testing player operations...');
      try {
        // Create a match
        const match = await createMatch({
          playerId: currentUser.uid,
          videoUrl: 'https://example.com/test-video',
          notes: 'Test match submission',
          status: 'pending'
        });
        console.log('✅ Match created:', match);

        // Get player matches
        const matches = await getPlayerMatches(currentUser.uid);
        console.log('✅ Player matches retrieved:', matches);

        // Update player stats
        await updatePlayerStats(currentUser.uid, {
          matchesSubmitted: 1,
          analysisReceived: 0,
          activeStreak: 1
        });
        console.log('✅ Player stats updated');
      } catch (error) {
        console.error('❌ Error in player operations:', error);
        throw error;
      }
    }

    if (user.role === 'coach') {
      console.log('👨‍🏫 Testing coach operations...');
      try {
        // Create a coach profile if it doesn't exist
        const existingProfile = await getCoachProfile(currentUser.uid);
        if (!existingProfile) {
          const coachProfile = await createCoachProfile({
            userId: currentUser.uid,
            specialties: ['Forehand', 'Backhand'],
            certifications: ['Level 1 Coach'],
            experience: '5 years',
            bio: 'Test coach bio',
            languages: ['English', 'Spanish']
          });
          console.log('✅ Coach profile created:', coachProfile);
        } else {
          console.log('✅ Using existing coach profile:', existingProfile);
        }

        // Get all pending matches (as a coach)
        const matches = await getPlayerMatches(currentUser.uid);
        console.log('✅ Available matches retrieved:', matches);

        // If there's a match, create an analysis
        if (matches.length > 0) {
          const analysis = await createAnalysis({
            matchId: matches[0].id,
            coachId: currentUser.uid,
            feedback: 'Great form on your forehand!',
            technicalScore: 8,
            tacticalScore: 7,
            fitnessScore: 9,
            recommendedDrills: ['Wall practice', 'Footwork drill']
          });
          console.log('✅ Analysis created:', analysis);
        }
      } catch (error) {
        console.error('❌ Error in coach operations:', error);
        throw error;
      }
    }

    // Test notifications (works for both roles)
    console.log('🔔 Testing notification operations...');
    try {
      const notification = await createNotification({
        userId: currentUser.uid,
        type: 'system',
        message: 'Test notification',
      });
      console.log('✅ Notification created:', notification);

      const notifications = await getUserNotifications(currentUser.uid);
      console.log('✅ User notifications retrieved:', notifications);

      if (notifications.length > 0) {
        await markNotificationRead(notifications[0].id);
        console.log('✅ Notification marked as read');
      }
    } catch (error) {
      console.error('❌ Error in notification operations:', error);
      throw error;
    }

    console.log('✅ All database tests completed successfully!');
  } catch (error) {
    console.error('❌ Test failed:', error);
    throw error;
  }
}; 