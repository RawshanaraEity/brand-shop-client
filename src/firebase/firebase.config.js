// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9zZlM9xhQwlhMvUAz09IqKW_hSm360W0",
  authDomain: "my-brand-shop-client.firebaseapp.com",
  projectId: "my-brand-shop-client",
  storageBucket: "my-brand-shop-client.appspot.com",
  messagingSenderId: "879875274311",
  appId: "1:879875274311:web:2db6f5bcbb43008bb26362"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;