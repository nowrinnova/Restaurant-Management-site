// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5KlVPg-tTBjmtdJtGG5nApEf-o_xgTq0",
  authDomain: "restaurant-site-9aeed.firebaseapp.com",
  projectId: "restaurant-site-9aeed",
  storageBucket: "restaurant-site-9aeed.firebasestorage.app",
  messagingSenderId: "992326072751",
  appId: "1:992326072751:web:3c27678db5dac3fab8975a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth