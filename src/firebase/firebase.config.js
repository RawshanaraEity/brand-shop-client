// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYoswJ6sb5wBoF7AgLOIsECEwfUKpw89Q",
  authDomain: "brand-shop-client-96213.firebaseapp.com",
  projectId: "brand-shop-client-96213",
  storageBucket: "brand-shop-client-96213.appspot.com",
  messagingSenderId: "857826818927",
  appId: "1:857826818927:web:9e7fe4b91d1f9d2b8bc69a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
