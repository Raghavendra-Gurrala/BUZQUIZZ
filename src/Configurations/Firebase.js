// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfoPYNzuOZNCRvOLaY9TzGGGBSa3-yhmc",
  authDomain: "buzquizz.firebaseapp.com",
  projectId: "buzquizz",
  storageBucket: "buzquizz.appspot.com",
  messagingSenderId: "140968620726",
  appId: "1:140968620726:web:5ba3334f653be759422c17",
  measurementId: "G-4Z04Q2NNMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;