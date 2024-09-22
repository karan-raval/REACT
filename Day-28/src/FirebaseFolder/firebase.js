import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKC576BGPlgsf8hYUm1C448oFjM4DZZ-w",
  authDomain: "firstapp-c95ae.firebaseapp.com",
  projectId: "firstapp-c95ae",
  storageBucket: "firstapp-c95ae.appspot.com",
  messagingSenderId: "476629925173",
  appId: "1:476629925173:web:9cc598d1c78dd72403207c"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)