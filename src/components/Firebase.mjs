// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5rwgOK4RW43nQZHdhKPWIEp1ZvOORJq4",
  authDomain: "houseonwheels.firebaseapp.com",
  projectId: "houseonwheels",
  storageBucket: "houseonwheels.appspot.com",
  messagingSenderId: "121042772350",
  appId: "1:121042772350:web:9fd63199a85e94737a132f",
  measurementId: "G-DDPLJGVV2X"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
export {auth,provider,signInWithPopup,createUserWithEmailAndPassword};
export default db;
