import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { auth, db } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  User as FirebaseUser,
} from 'firebase/auth';
import { doc, getDoc, setDoc, collection, query, where, getDocs, Timestamp } from 'firebase/firestore';

type Role = 'player' | 'coach';

interface AuthContextType {
  user: FirebaseUser | null;
  userRole: Role | null;
  loading: boolean;
  signup: (email: string, password: string, role: Role, firstName: string, lastName: string) => Promise<void>;
  login: (email: string, password: string) => Promise<Role | null>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [userRole, setUserRole] = useState<Role | null>(null);
  const [loading, setLoading] = useState(true);

  const signup = async (email: string, password: string, role: Role, firstName: string, lastName: string) => {
    try {
      console.log('Starting signup process...');
      
      // Create the Firebase auth user first
      console.log('Creating Firebase auth user...');
      const credential = await createUserWithEmailAndPassword(auth, email, password);
      
      if (credential.user) {
        console.log('Auth user created, creating Firestore document...');
        const userData = {
          uid: credential.user.uid,
          role,
          email: email.toLowerCase(),
          firstName,
          lastName,
          createdAt: Timestamp.now()
        };
        
        try {
          // Now create the Firestore document
          await setDoc(doc(db, 'users', credential.user.uid), userData);
          console.log('Firestore user document created successfully');
          setUserRole(role);
        } catch (firestoreError) {
          console.error('Error creating Firestore document:', firestoreError);
          // If Firestore fails, delete the auth user to maintain consistency
          await credential.user.delete();
          throw new Error('Failed to complete signup. Please try again.');
        }
      }
    } catch (error: any) {
      console.error('Signup error:', error);
      // Enhance error messages for common Firebase errors
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('This email is already registered. Please use a different email or sign in.');
      } else if (error.code === 'auth/weak-password') {
        throw new Error('Password is too weak. Please use a stronger password.');
      } else if (error.code === 'auth/invalid-email') {
        throw new Error('Invalid email address. Please check your email and try again.');
      }
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    if (credential.user) {
      const userDoc = await getDoc(doc(db, 'users', credential.user.uid));
      const userData = userDoc.data();
      
      if (!userData) {
        await signOut(auth);
        throw new Error('User data not found. Please contact support.');
      }
      
      console.log('Login - Setting user role to:', userData.role);
      setUserRole(userData.role as Role);
      return userData.role;
    }
    return null;
  };

  const logoutFn = async () => {
    setUserRole(null);
    await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const snap = await getDoc(doc(db, 'users', currentUser.uid));
        const data = snap.data();
        if (data?.role) {
          console.log('Auth state change - Setting user role to:', data.role);
          setUserRole(data.role as Role);
        } else {
          console.log('No role found for user, logging out');
          await signOut(auth);
          setUserRole(null);
        }
      } else {
        console.log('No user, clearing role');
        setUserRole(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = { user, userRole, loading, signup, login, logout: logoutFn };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}; 