// lib/firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "tezcodestudios-f6dc6.firebaseapp.com",
  projectId: "tezcodestudios-f6dc6",
  storageBucket: "tezcodestudios-f6dc6.firebasestorage.app",
  messagingSenderId: "252298676430",
  appId: "1:252298676430:web:8abfc47d7635ac26d5689f"
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