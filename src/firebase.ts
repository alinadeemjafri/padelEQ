import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCFki1AbYEIfc7hCBMToBixSfK8lGXPcaA",
  authDomain: "padeleq-8abcc.firebaseapp.com",
  projectId: "padeleq-8abcc",
  storageBucket: "padeleq-8abcc.firebasestorage.app",
  messagingSenderId: "559497825045",
  appId: "1:559497825045:web:9723a7e013408794baf71c",
  measurementId: "G-FDN7FM0K18"
};

const app = initializeApp(firebaseConfig);

// Initialize Analytics only in browser environment
let analytics;
try {
  if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }
} catch (e) {
  console.warn('Firebase analytics failed to initialize', e);
}

export const auth = getAuth(app);
export const db = getFirestore(app);
export { analytics }; 