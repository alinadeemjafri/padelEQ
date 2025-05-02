import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getCoachProfile, createCoachProfile } from '../services/database';
import type { CoachProfile } from '../types/database';

export const useCoachProfile = (coachId?: string) => {
  const [profile, setProfile] = useState<CoachProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  // Use provided coachId or current user's ID
  const targetId = coachId || user?.uid;

  useEffect(() => {
    const fetchProfile = async () => {
      if (!targetId) return;
      
      try {
        setLoading(true);
        setError(null);
        const fetchedProfile = await getCoachProfile(targetId);
        setProfile(fetchedProfile);
      } catch (err) {
        console.error('Error fetching coach profile:', err);
        setError('Failed to load coach profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [targetId]);

  const updateProfile = async (profileData: Omit<CoachProfile, 'rating' | 'reviewCount'>) => {
    if (!user) throw new Error('Not authenticated');
    
    try {
      setLoading(true);
      setError(null);
      const updatedProfile = await createCoachProfile(profileData);
      setProfile(updatedProfile);
      return updatedProfile;
    } catch (err) {
      console.error('Error updating coach profile:', err);
      setError('Failed to update coach profile');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { profile, loading, error, updateProfile };
}; 