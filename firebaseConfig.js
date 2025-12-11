// lib/firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// ---------------- FIREBASE CONFIG ----------------
const firebaseConfig = {
   apiKey: process.env.FIREBASE_API_KEY,
   authDomain: "tezcodestudios-222b2.firebaseapp.com",
   projectId: "tezcodestudios-222b2",
   storageBucket: "tezcodestudios-222b2.firebasestorage.app",
   messagingSenderId: "708040977490",
   appId: "1:708040977490:web:b389b1606252a3cb1ac38b",
   measurementId: "G-T6T9QEGXQG"
};

// ---------------- INIT (SAFE FOR NEXT.JS) ----------------
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Firebase services (SSR-safe)
export const auth = getAuth(app);
export const firestore = getFirestore(app);

// Analytics (client only, optional)
export const analytics =
  typeof window !== "undefined" ?
  await isSupported().then((ok) => (ok ? getAnalytics(app) : null)) :
  null;

export default app;