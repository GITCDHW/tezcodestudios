import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const firebaseAdminConfig = {
  projectId: "tezcodestudios-f6dc6",
  clientEmail: "firebase-adminsdk-fbsvc@tezcodestudios-f6dc6.iam.gserviceaccount.com",
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
};

const app = !getApps().length ?
  initializeApp({
    credential: cert(firebaseAdminConfig),
  }) :
  getApps()[0];

export const firestore = getFirestore(app);