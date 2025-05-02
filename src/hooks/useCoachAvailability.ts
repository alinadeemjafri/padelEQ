import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getCoachAvailability, updateAvailability } from '../services/database';
import type { Availability } from '../types/database';
import { Timestamp } from 'firebase/firestore';

export const useCoachAvailability = (coachId?: string) => {
  const [availability, setAvailability] = useState<Availability[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user, userRole } = useAuth();

  useEffect(() => {
    const fetchAvailability = async () => {
      if (!coachId) return;
      
      try {
        setLoading(true);
        setError(null);
        const slots = await getCoachAvailability(coachId);
        setAvailability(slots);
      } catch (err) {
        console.error('Error fetching availability:', err);
        setError('Failed to load coach availability');
      } finally {
        setLoading(false);
      }
    };

    fetchAvailability();
  }, [coachId]);

  const updateTimeSlots = async (slots: Omit<Availability, 'id'>[]) => {
    if (!user) throw new Error('Not authenticated');
    if (userRole !== 'coach') throw new Error('Only coaches can update availability');
    
    try {
      setLoading(true);
      setError(null);
      await updateAvailability(user.uid, slots);
      const updatedSlots = await getCoachAvailability(user.uid);
      setAvailability(updatedSlots);
    } catch (err) {
      console.error('Error updating availability:', err);
      setError('Failed to update availability');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getAvailableSlots = (startDate: Date, endDate: Date) => {
    return availability.filter(slot => {
      const slotTime = (slot.startTime as Timestamp).toDate();
      return slotTime >= startDate && slotTime <= endDate && !slot.isBooked;
    });
  };

  const isTimeSlotAvailable = (startTime: Date) => {
    return availability.some(slot => {
      const slotTime = (slot.startTime as Timestamp).toDate();
      return slotTime.getTime() === startTime.getTime() && !slot.isBooked;
    });
  };

  return {
    availability,
    loading,
    error,
    updateTimeSlots,
    getAvailableSlots,
    isTimeSlotAvailable
  };
}; 