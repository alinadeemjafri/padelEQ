import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getUserNotifications, markNotificationRead } from '../services/database';
import type { Notification } from '../types/database';

export const useNotifications = (unreadOnly = false) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchNotifications = async () => {
      if (!user) return;
      
      try {
        setLoading(true);
        setError(null);
        const fetchedNotifications = await getUserNotifications(user.uid, unreadOnly);
        setNotifications(fetchedNotifications);
      } catch (err) {
        console.error('Error fetching notifications:', err);
        setError('Failed to load notifications');
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [user, unreadOnly]);

  const markAsRead = async (notificationId: string) => {
    try {
      await markNotificationRead(notificationId);
      setNotifications(prevNotifications =>
        prevNotifications.map(notification =>
          notification.id === notificationId
            ? { ...notification, read: true }
            : notification
        )
      );
    } catch (err) {
      console.error('Error marking notification as read:', err);
      throw new Error('Failed to mark notification as read');
    }
  };

  const refresh = async () => {
    if (!user) return;
    
    try {
      setLoading(true);
      const fetchedNotifications = await getUserNotifications(user.uid, unreadOnly);
      setNotifications(fetchedNotifications);
      setError(null);
    } catch (err) {
      console.error('Error refreshing notifications:', err);
      setError('Failed to refresh notifications');
    } finally {
      setLoading(false);
    }
  };

  return {
    notifications,
    loading,
    error,
    markAsRead,
    refresh,
    unreadCount: notifications.filter(n => !n.read).length
  };
}; 