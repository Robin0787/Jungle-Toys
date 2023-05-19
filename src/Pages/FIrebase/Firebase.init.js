// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.FIREBASE_APIKEY,
  authDomain: import.meta.FIREBASE_AUTHDOMAIN,
  projectId: import.meta.FIREBASE_PROJECTID,
  storageBucket: import.meta.FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.FIREBASE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);