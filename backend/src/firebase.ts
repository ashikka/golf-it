import firebase from "firebase";
import dotenv from 'dotenv';
dotenv.config();

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
}

// Initialize Firebase app
export const F = firebase.initializeApp(config)

export const firestore = firebase.firestore(F)
// export const storage = firebase.storage(F)
// export const auth = firebase.auth(F)
// export const notifications = firebase.messaging(F)

export default firestore