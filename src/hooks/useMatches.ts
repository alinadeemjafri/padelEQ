import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getPlayerMatches, getCoachMatches } from '../services/database';
import type { Match } from '../types/database';

export const useMatches = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user, userRole } = useAuth();

  useEffect(() => {
    const fetchMatches = async () => {
      if (!user) return;
      
      try {
        setLoading(true);
        setError(null);
        
        const fetchedMatches = userRole === 'coach' 
          ? await getCoachMatches(user.uid)
          : await getPlayerMatches(user.uid);
        
        setMatches(fetchedMatches);
      } catch (err) {
        console.error('Error fetching matches:', err);
        setError('Failed to load matches');
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, [user, userRole]);

  const refreshMatches = () => {
    setLoading(true);
    // Re-run the effect
    const fetchMatches = async () => {
      if (!user) return;
      
      try {
        const fetchedMatches = userRole === 'coach' 
          ? await getCoachMatches(user.uid)
          : await getPlayerMatches(user.uid);
        
        setMatches(fetchedMatches);
        setError(null);
      } catch (err) {
        console.error('Error refreshing matches:', err);
        setError('Failed to refresh matches');
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  };

  return { matches, loading, error, refreshMatches };
}; 