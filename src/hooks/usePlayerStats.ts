import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import type { PlayerStats } from '../types/database';

export const usePlayerStats = (playerId?: string) => {
  const [stats, setStats] = useState<PlayerStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  // Use provided playerId or current user's ID
  const targetId = playerId || user?.uid;

  useEffect(() => {
    const fetchStats = async () => {
      if (!targetId) return;
      
      try {
        setLoading(true);
        setError(null);
        const statsDoc = await getDoc(doc(db, 'playerStats', targetId));
        if (statsDoc.exists()) {
          setStats(statsDoc.data() as PlayerStats);
        } else {
          setStats(null);
        }
      } catch (err) {
        console.error('Error fetching player stats:', err);
        setError('Failed to load player statistics');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [targetId]);

  const getProgressData = () => {
    if (!stats) return null;

    return {
      technical: stats.technicalProgress || [],
      tactical: stats.tacticalProgress || [],
      fitness: stats.fitnessProgress || [],
    };
  };

  const getActivitySummary = () => {
    if (!stats) return null;

    return {
      totalMatches: stats.matchesSubmitted,
      analysisReceived: stats.analysisReceived,
      activeStreak: stats.activeStreak,
      lastSubmission: stats.lastSubmission,
    };
  };

  return {
    stats,
    loading,
    error,
    getProgressData,
    getActivitySummary,
  };
}; 