// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl0WybBoYOJDtOmtwqkL7fZT1pgleJsy4",
  authDomain: "login-76b54.firebaseapp.com",
  projectId: "login-76b54",
  storageBucket: "login-76b54.firebasestorage.app",
  messagingSenderId: "550088587937",
  appId: "1:550088587937:web:2055e314c42342d8490ee0",
  measurementId: "G-Z0HWTPF3JE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
export const db = getFirestore(app);
export default app;