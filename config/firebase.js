import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDh295QnccBof91qPBEkehKDSTcnoJTXHw",
  authDomain: "chatapp-2c4d8.firebaseapp.com",
  projectId: "chatapp-2c4d8",
  storageBucket: "chatapp-2c4d8.appspot.com",
  messagingSenderId: "47429453727",
  appId: "1:47429453727:web:a1d0fbeec6b901042cdfaa",
  measurementId: "G-ZNRMC98EYR"
};

// initialize firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getFirestore();
