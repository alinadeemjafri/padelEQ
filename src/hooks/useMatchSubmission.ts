import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useUserProfile } from './useUserProfile';
import { submitMatch } from '../services/database';
import type { Match } from '../types/database';

export const useMatchSubmission = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user, userRole } = useAuth();
  const { email, firstName, lastName, fullName } = useUserProfile();

  const submitNewMatch = async (matchData: Omit<Match, 'id' | 'createdAt' | 'playerId' | 'status'> & { guestEmail?: string; guestName?: string }) => {
    try {
      setLoading(true);
      setError(null);
      let match;
      if (user && userRole === 'player') {
        match = await submitMatch({
          ...matchData,
          playerId: user.uid,
          status: 'pending',
          guest: false,
        });
      } else {
        // Guest submission
        match = await submitMatch({
          ...matchData,
          playerId: undefined,
          status: 'pending',
          guest: true,
          guestEmail: matchData.guestEmail,
          guestName: matchData.guestName,
        });
      }
      return match;
    } catch (err) {
      console.error('Error submitting match:', err);
      setError('Failed to submit match');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const validateMatchData = (data: any): string | null => {
    if (!data.date) return 'Match date is required';
    if (!data.location) return 'Match location is required';
    if (!data.duration) return 'Match duration is required';
    if (!data.coachId) return 'Coach selection is required';
    if (!data.skillLevel) return 'Skill level is required';
    if (!data.focusAreas || data.focusAreas.length === 0) return 'At least one focus area is required';
    return null;
  };

  return {
    loading,
    error,
    submitNewMatch,
    validateMatchData,
    userEmail: email,
    userFirstName: firstName,
    userLastName: lastName,
    userFullName: fullName
  };
}; 