import { collection, doc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAlxzNMp1afpDLBtgjsQz7HRzvO3Ep6T78",
  authDomain: "clone-2d191.firebaseapp.com",
  projectId: "clone-2d191",
  storageBucket: "clone-2d191.appspot.com",
  messagingSenderId: "463944623801",
  appId: "1:463944623801:web:37d8bb5d946b3115411d68",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
