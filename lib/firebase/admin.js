import { initializeApp, applicationDefault, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";


const app = !getApps().length ?
  initializeApp({
    credential: applicationDefault(),
  }) :
  getApps()[0];

export const firestore = getFirestore(app);