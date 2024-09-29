// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth"
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-Lz3kpsyH64c0WMbmmHgwHrmuGmbXb_w",
  authDomain: "admin-f26b2.firebaseapp.com",
  projectId: "admin-f26b2",
  storageBucket: "admin-f26b2.appspot.com",
  messagingSenderId: "1042947080466",
  appId: "1:1042947080466:web:83f026396759e03f8ab3cb"
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