// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv6_y5sJ-7XtYiJDBSG2r0saJ6oHRnPno",
  authDomain: "streaming-app-8a465.firebaseapp.com",
  projectId: "streaming-app-8a465",
  storageBucket: "streaming-app-8a465.appspot.com",
  messagingSenderId: "975288971098",
  appId: "1:975288971098:web:91fbbe71fcdb0934318d63",
  measurementId: "G-P1LBC3MZCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);    