// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRS8rPuHMugWiHIsj9BrxgCp8absgU3Jw",
  authDomain: "ecommerce-nba.firebaseapp.com",
  projectId: "ecommerce-nba",
  storageBucket: "ecommerce-nba.appspot.com",
  messagingSenderId: "589057760495",
  appId: "1:589057760495:web:7451110796187d46864f1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
export default db;