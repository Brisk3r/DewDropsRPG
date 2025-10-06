// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtNbE5ajxLdc57G5y3Wq9bz7ZgP4bgiEE",
  authDomain: "gamedb-903e3.firebaseapp.com",
  projectId: "gamedb-903e3",
  storageBucket: "gamedb-903e3.firebasestorage.app",
  messagingSenderId: "307571396357",
  appId: "1:307571396357:web:76358b8a778ea69932316c",
  measurementId: "G-X1L35GCLZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
