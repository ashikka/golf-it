import firebase from "firebase";

const config = {
  apiKey: "AIzaSyD-JsiqVCVhOUJG6Nf5JwcJbLn3mGaWb1Y",
  authDomain: "golfit-e5f0f.firebaseapp.com",
  projectId: "golfit-e5f0f",
  storageBucket: "golfit-e5f0f.appspot.com",
  messagingSenderId: "859193518509",
  appId: "1:859193518509:web:f518773f20fa79cff51924"
}

// Initialize Firebase app
export const F = firebase.initializeApp(config)

export const firestore = firebase.firestore(F)
// export const storage = firebase.storage(F)
// export const auth = firebase.auth(F)
// export const notifications = firebase.messaging(F)

export default firestore