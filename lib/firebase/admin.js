import admin from 'firebase-admin';

// Initialize Firebase Admin SDK only once
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        
        // Proper newline fix for private key
        privateKey: process.env.FIREBASE_PRIVATE_KEY ?
          process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') :
          undefined,
      }),
      // databaseURL: process.env.FIREBASE_DATABASE_URL, // only if using RTDB
    });
  } catch (error) {
    console.error('Firebase Admin initialization error:', error);
  }
}

const firestore = admin.firestore();

export { firestore };