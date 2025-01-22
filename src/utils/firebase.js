// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAupE1YKz0wrl_exYZWXfb1BueaHHRpFUw",
  authDomain: "netflixgpt-40aea.firebaseapp.com",
  projectId: "netflixgpt-40aea",
  storageBucket: "netflixgpt-40aea.appspot.com",
  messagingSenderId: "364047144420",
  appId: "1:364047144420:web:91939ffe5c5315c62ce3f1",
  measurementId: "G-2R0CXVNYQL"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();