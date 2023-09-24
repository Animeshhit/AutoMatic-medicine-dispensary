// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArnuYnbEMUFftOzrTpLP-nZj24uPaBHw0",
  authDomain: "hackathon-project-a5202.firebaseapp.com",
  projectId: "hackathon-project-a5202",
  storageBucket: "hackathon-project-a5202.appspot.com",
  messagingSenderId: "824664390552",
  appId: "1:824664390552:web:757b7309f4cc8ef53f09ed",
  measurementId: "G-S8GQ1KC9KK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
