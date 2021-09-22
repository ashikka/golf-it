import firebase from "firebase";

const config = {
  
}

// Initialize Firebase app
export const F = firebase.initializeApp(config)

export const firestore = firebase.firestore(F)
export const storage = firebase.storage(F)
export const auth = firebase.auth(F)
export const notifications = firebase.messaging(F)

export default firestore