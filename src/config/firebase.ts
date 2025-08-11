import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB873ojOLsdmxTy0PQnTDXKfYd3sf2j4XE",
  authDomain: "mini-website-b19ae.firebaseapp.com",
  databaseURL: "https://mini-website-b19ae-default-rtdb.firebaseio.com",
  projectId: "mini-website-b19ae",
  storageBucket: "mini-website-b19ae.firebasestorage.app",
  messagingSenderId: "108078044783",
  appId: "1:108078044783:web:d72d0a195b048bd2681f9a",
  measurementId: "G-KJ9C1MCX2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

export default app;