import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getCoachReviews, submitReview } from '../services/database';
import type { Review } from '../types/database';
import { Timestamp } from 'firebase/firestore';

export const useReviews = (coachId?: string) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user, userRole } = useAuth();

  useEffect(() => {
    const fetchReviews = async () => {
      if (!coachId) return;
      
      try {
        setLoading(true);
        setError(null);
        const fetchedReviews = await getCoachReviews(coachId);
        setReviews(fetchedReviews);
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError('Failed to load coach reviews');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [coachId]);

  const addReview = async (reviewData: Omit<Review, 'id' | 'createdAt' | 'playerId'>) => {
    if (!user) throw new Error('Not authenticated');
    if (userRole !== 'player') throw new Error('Only players can submit reviews');
    
    try {
      setLoading(true);
      setError(null);
      const newReview = await submitReview({
        ...reviewData,
        playerId: user.uid
      });
      setReviews(prev => [...prev, newReview]);
      return newReview;
    } catch (err) {
      console.error('Error submitting review:', err);
      setError('Failed to submit review');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getAverageRating = () => {
    if (reviews.length === 0) return null;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return sum / reviews.length;
  };

  const getReviewStats = () => {
    if (reviews.length === 0) return null;

    const stats = {
      total: reviews.length,
      ratingDistribution: new Array(5).fill(0),
      recentReviews: reviews
        .sort((a, b) => {
          const timeA = (a.createdAt as Timestamp).toMillis();
          const timeB = (b.createdAt as Timestamp).toMillis();
          return timeB - timeA;
        })
        .slice(0, 5)
    };

    reviews.forEach(review => {
      stats.ratingDistribution[review.rating - 1]++;
    });

    return stats;
  };

  return {
    reviews,
    loading,
    error,
    addReview,
    getAverageRating,
    getReviewStats
  };
}; 