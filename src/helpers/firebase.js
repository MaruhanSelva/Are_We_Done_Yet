// Module for dealing with FireBase

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBxXe6qToFEYwas48-TVAxavYPpkdmP-i4",
  authDomain: "arewedoneyet-95f25.firebaseapp.com",
  projectId: "arewedoneyet-95f25",
  storageBucket: "arewedoneyet-95f25.appspot.com",
  messagingSenderId: "217150032565",
  appId: "1:217150032565:web:f295146451ddb9dc3c0cfc",
  measurementId: "G-Q4T9Z2RE2T"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;

