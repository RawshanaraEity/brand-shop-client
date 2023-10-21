import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app)

// const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  
  // google login
//   const googleLogin = () => {
//     return signInWithPopup(auth,googleProvider)
//   }

   // signup
   const createUser = (email, password) => {
    
    return createUserWithEmailAndPassword(auth, email, password);
  };




  const info = {
    // googleLogin,
    createUser
  }

  return <AuthContext.Provider value={info}> {children} </AuthContext.Provider>
};

export default AuthProvider;