
// Firebase configuration file
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyADDlco3DxhyB3ksRYsQSRXITWT52Aebk0",
  authDomain: "cloudnine-northeast.firebaseapp.com",
  projectId: "cloudnine-northeast",
  storageBucket: "cloudnine-northeast.firebasestorage.app",
  messagingSenderId: "746093308508",
  appId: "1:746093308508:web:cc1abeccb6b8ec08809499",
  measurementId: "G-3MWTK7JBLN"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
