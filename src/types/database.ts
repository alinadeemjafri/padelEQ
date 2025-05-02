import { Timestamp } from 'firebase/firestore';

export type Role = 'player' | 'coach';

export interface User {
  uid: string;
  email: string;
  role: Role;
  createdAt: Timestamp;
  firstName: string;
  lastName: string;
  profilePicture?: string;
}

export interface Match {
  id: string;
  playerId?: string;
  coachId?: string;
  videoUrl: string;
  status: 'pending' | 'in-progress' | 'completed';
  submittedAt: Timestamp;
  notes?: string;
  lastUpdated: Timestamp;
  guest?: boolean;
  guestEmail?: string;
  guestName?: string;
}

export interface Analysis {
  id: string;
  matchId: string;
  coachId: string;
  feedback: string;
  createdAt: Timestamp;
  technicalScore?: number;
  tacticalScore?: number;
  fitnessScore?: number;
  recommendedDrills?: string[];
}

export interface CoachProfile {
  userId: string;
  specialties: string[];
  certifications: string[];
  experience: string;
  bio: string;
  rating: number;
  reviewCount: number;
  languages: string[];
  availability?: string;
}

export interface Review {
  id: string;
  coachId: string;
  playerId: string;
  matchId: string;
  rating: number;
  comment: string;
  createdAt: Timestamp;
}

export interface PlayerStats {
  playerId: string;
  matchesSubmitted: number;
  lastSubmission: Timestamp;
  analysisReceived: number;
  technicalProgress?: number[];
  tacticalProgress?: number[];
  fitnessProgress?: number[];
  activeStreak: number;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'analysis_ready' | 'new_submission' | 'review_received' | 'system';
  message: string;
  read: boolean;
  createdAt: Timestamp;
  relatedMatchId?: string;
}

export interface Availability {
  id: string;
  coachId: string;
  startTime: Timestamp;
  endTime: Timestamp;
  isBooked: boolean;
  createdAt: Timestamp;
} 