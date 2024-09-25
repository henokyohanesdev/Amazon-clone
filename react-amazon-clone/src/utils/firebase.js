// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlxzNMp1afpDLBtgjsQz7HRzvO3Ep6T78",
  authDomain: "clone-2d191.firebaseapp.com",
  projectId: "clone-2d191",
  storageBucket: "clone-2d191.appspot.com",
  messagingSenderId: "463944623801",
  appId: "1:463944623801:web:37d8bb5d946b3115411d68",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)
