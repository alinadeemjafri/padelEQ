import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getMatchAnalysis, createAnalysis } from '../services/database';
import type { Analysis } from '../types/database';

export const useAnalysis = (matchId?: string) => {
  const [analyses, setAnalyses] = useState<Analysis[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user, userRole } = useAuth();

  useEffect(() => {
    const fetchAnalyses = async () => {
      if (!matchId) return;
      
      try {
        setLoading(true);
        setError(null);
        const fetchedAnalyses = await getMatchAnalysis(matchId);
        setAnalyses(fetchedAnalyses);
      } catch (err) {
        console.error('Error fetching analyses:', err);
        setError('Failed to load match analyses');
      } finally {
        setLoading(false);
      }
    };

    fetchAnalyses();
  }, [matchId]);

  const submitAnalysis = async (analysisData: Omit<Analysis, 'id' | 'createdAt'>) => {
    if (!user) throw new Error('Not authenticated');
    if (userRole !== 'coach') throw new Error('Only coaches can submit analysis');
    
    try {
      setLoading(true);
      setError(null);
      const newAnalysis = await createAnalysis(analysisData);
      setAnalyses(prev => [...prev, newAnalysis]);
      return newAnalysis;
    } catch (err) {
      console.error('Error submitting analysis:', err);
      setError('Failed to submit analysis');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getLatestAnalysis = () => {
    if (analyses.length === 0) return null;
    return analyses.reduce((latest, current) => 
      latest.createdAt > current.createdAt ? latest : current
    );
  };

  const getAverageScores = () => {
    if (analyses.length === 0) return null;

    const sum = analyses.reduce((acc, analysis) => ({
      technical: acc.technical + (analysis.technicalScore || 0),
      tactical: acc.tactical + (analysis.tacticalScore || 0),
      fitness: acc.fitness + (analysis.fitnessScore || 0),
      count: acc.count + 1
    }), { technical: 0, tactical: 0, fitness: 0, count: 0 });

    return {
      technical: sum.technical / sum.count,
      tactical: sum.tactical / sum.count,
      fitness: sum.fitness / sum.count
    };
  };

  return {
    analyses,
    loading,
    error,
    submitAnalysis,
    getLatestAnalysis,
    getAverageScores
  };
}; 