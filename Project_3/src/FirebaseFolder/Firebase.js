// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEJUKNwOB_s0HY4YIigWN7vLq5yDqhwRs",
  authDomain: "task-f9af9.firebaseapp.com",
  projectId: "task-f9af9",
  storageBucket: "task-f9af9.appspot.com",
  messagingSenderId: "324698789256",
  appId: "1:324698789256:web:e0ce18dd7ae95bded2163d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth()


export const googleAuth = ()=>{
   let provider = new GoogleAuthProvider()
   return signInWithPopup(auth,provider)
}

export const GoogleLogout = async ()=>{
    return await signOut(auth)
}