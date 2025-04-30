import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { auth, db } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  User as FirebaseUser,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

type Role = 'player' | 'coach';

interface AuthContextType {
  user: FirebaseUser | null;
  userRole: Role | null;
  loading: boolean;
  signup: (email: string, password: string, role: Role) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [userRole, setUserRole] = useState<Role | null>(null);
  const [loading, setLoading] = useState(true);

  const signup = async (email: string, password: string, role: Role) => {
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    if (credential.user) {
      await setDoc(doc(db, 'users', credential.user.uid), { role });
      setUserRole(role);
    }
  };

  const login = async (email: string, password: string) => {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    if (credential.user) {
      const snap = await getDoc(doc(db, 'users', credential.user.uid));
      const data = snap.data();
      if (data && data.role) setUserRole(data.role as Role);
    }
  };

  const logoutFn = () => {
    setUserRole(null);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const snap = await getDoc(doc(db, 'users', currentUser.uid));
        const data = snap.data();
        setUserRole((data as any)?.role || null);
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