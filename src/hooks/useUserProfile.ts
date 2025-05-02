import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getUser } from '../services/database';
import type { User } from '../types/database';

export const useUserProfile = () => {
  const [profile, setProfile] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user?.uid) {
        setProfile(null);
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        setError(null);
        const userData = await getUser(user.uid);
        setProfile(userData);
      } catch (err) {
        console.error('Error fetching user profile:', err);
        setError('Failed to load user profile');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [user?.uid]);

  // If guest, return empty fields and loading: false
  if (!user) {
    return {
      profile: null,
      loading: false,
      error: null,
      email: '',
      firstName: '',
      lastName: '',
      fullName: '',
      profilePicture: undefined,
    };
  }

  return {
    profile,
    loading,
    error,
    email: profile?.email || user?.email || '',
    firstName: profile?.firstName || '',
    lastName: profile?.lastName || '',
    fullName: profile ? `${profile.firstName} ${profile.lastName}` : '',
    profilePicture: profile?.profilePicture
  };
}; 