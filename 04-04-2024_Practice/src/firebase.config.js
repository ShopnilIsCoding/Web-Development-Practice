// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7SMauOuLovPtlZgDc7qP3Yeknbx54GAg",
  authDomain: "simple-auth-cda70.firebaseapp.com",
  projectId: "simple-auth-cda70",
  storageBucket: "simple-auth-cda70.appspot.com",
  messagingSenderId: "117098902448",
  appId: "1:117098902448:web:46803352927098bf185c75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;