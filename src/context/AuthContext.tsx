import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile,
  User as FirebaseUser,
  connectAuthEmulator
} from 'firebase/auth';
import { ref, set, get } from 'firebase/database';
import { auth, database } from '../config/firebase';
import { AuthContextType, User } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Initialize auth emulator for development if needed
    if (!initialized && process.env.NODE_ENV === 'development') {
      try {
        // Only connect to emulator in development and if not already connected
        if (!auth.config.emulator) {
          // connectAuthEmulator(auth, 'http://localhost:9099');
        }
      } catch (error) {
        console.log('Auth emulator already connected or not needed');
      }
      setInitialized(true);
    }
  }, [initialized]);

  useEffect(() => {
    if (!initialized && process.env.NODE_ENV === 'development') return;
    
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        try {
          // Get additional user data from database
          const userRef = ref(database, `users/${firebaseUser.uid}`);
          const snapshot = await get(userRef);
          const userData = snapshot.val();
          
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email || '',
            displayName: userData?.displayName || firebaseUser.displayName || '',
            createdAt: userData?.createdAt || new Date().toISOString(),
          });
        } catch (error) {
          console.error('Error fetching user data:', error);
          // Fallback to basic user data
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email || '',
            displayName: firebaseUser.displayName || '',
            createdAt: new Date().toISOString(),
          });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [initialized]);

  const signup = async (email: string, password: string, displayName: string) => {
    try {
      const { user: firebaseUser } = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update profile
      await updateProfile(firebaseUser, { displayName });
      
      // Save user data to database
      const userData = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName,
        createdAt: new Date().toISOString(),
      };
      
      await set(ref(database, `users/${firebaseUser.uid}`), userData);
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      // Save current cart to localStorage before logout
      if (auth.currentUser) {
        const cartRef = ref(database, `carts/${auth.currentUser.uid}`);
        const snapshot = await get(cartRef);
        const cartData = snapshot.val();
        if (cartData && cartData.items) {
          localStorage.setItem('cart', JSON.stringify(cartData.items));
        }
      }
      
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};