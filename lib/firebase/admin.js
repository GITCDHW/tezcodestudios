import admin from 'firebase-admin';

// Initialize Firebase Admin SDK only once
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // The private_key environment variable needs to be unescaped.
        // Vercel usually handles newlines in environment variables correctly,
        // but for safety, we replace escaped newlines with actual ones.
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/
/g, '
'),
      }),
      // Database URL is not strictly needed for Firestore, but good practice if using RTDB
      // databaseURL: process.env.FIREBASE_DATABASE_URL,
    });
  } catch (error) {
    console.error('Firebase Admin initialization error', error.stack);
  }
}

const firestore = admin.firestore();

export { firestore };
