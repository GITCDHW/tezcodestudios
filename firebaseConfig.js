// This file is for client-side Firebase configuration (e.g., Firebase Authentication,
// client-side Firestore access for public data, or analytics).
// For server-side operations (like processing contact forms), use `lib/firebase/admin.js`.

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID, // Optional, for analytics
};

// You might initialize Firebase client-side here if needed for other features:
// import { initializeApp } from "firebase/app";
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app); // Example for client-side Firestore

export { firebaseConfig };
