// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4y-OqNem-QTxD8tpxCWoCDxbny19AxWs",
  authDomain: "jsschool-232bc.firebaseapp.com",
  projectId: "jsschool-232bc",
  storageBucket: "jsschool-232bc.firebasestorage.app",
  messagingSenderId: "1028559689300",
  appId: "1:1028559689300:web:4776c08ececc6a79e23fc1",
  measurementId: "G-KDE4S9GMH7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
};
