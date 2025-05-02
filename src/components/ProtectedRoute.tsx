import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole: 'player' | 'coach';
}

const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const { user, userRole, loading } = useAuth();
  
  console.log('Protected Route Debug:', {
    isLoggedIn: !!user,
    userEmail: user?.email,
    currentRole: userRole,
    requiredRole: requiredRole,
    loading
  });

  // If still loading, show nothing
  if (loading) return null;

  // If no user, redirect to sign in
  if (!user) return <Navigate to="/signin" replace />;

  // If we have a user but no role yet, wait
  if (user && !userRole) return null;

  // If we have both user and role but they don't match, redirect home
  if (requiredRole && userRole !== requiredRole) {
    console.log('Role mismatch:', { userRole, requiredRole });
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute; 