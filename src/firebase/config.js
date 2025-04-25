// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFt52SakKOq06BOhx1Z7dM0FIpr9R41Ck",
  authDomain: "Harmoniq-e397c.firebaseapp.com",
  projectId: "Harmoniq-e397c",
  storageBucket: "Harmoniq-e397c.appspot.com",
  messagingSenderId: "250307839346",
  appId: "1:250307839346:web:00734d6efe9e1d0decc9eb",
  measurementId: "G-GN0TZTET20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app,auth}