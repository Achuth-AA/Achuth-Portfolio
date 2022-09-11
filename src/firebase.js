// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAEuPWk00RbnxcjFIK1XJkYKXsKzeVkm8",
  authDomain: "d-achuth.firebaseapp.com",
  projectId: "d-achuth",
  storageBucket: "d-achuth.appspot.com",
  messagingSenderId: "809293024049",
  appId: "1:809293024049:web:770f1bdcaa8508c95ffe10",
  measurementId: "G-7NG10R51JJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);