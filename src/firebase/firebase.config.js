
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCspkVCHYbtIoCnkxeF7MkKLA90NyBtd4M",
  authDomain: "my-brand-client.firebaseapp.com",
  projectId: "my-brand-client",
  storageBucket: "my-brand-client.appspot.com",
  messagingSenderId: "169590055807",
  appId: "1:169590055807:web:51f0813fd5bb383945304a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;