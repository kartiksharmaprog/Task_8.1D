// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQOcC8q1A3JebQBbmfN1nrEs73lcG9xoQ",
  authDomain: "task8d-63fc5.firebaseapp.com",
  projectId: "task8d-63fc5",
  storageBucket: "task8d-63fc5.firebasestorage.app",
  messagingSenderId: "265180640245",
  appId: "1:265180640245:web:181884472975186fc566bc",
  measurementId: "G-CV8VM34VL3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };