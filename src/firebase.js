// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4uK7ZbwnNwhDKOJ2vvTyH9MnTumFlNSg",
  authDomain: "challenge-5c0c2.firebaseapp.com",
  projectId: "challenge-5c0c2",
  storageBucket: "challenge-5c0c2.appspot.com",
  messagingSenderId: "884371998930",
  appId: "1:884371998930:web:3ea64319cbf3d4c1f0850b",
  measurementId: "G-FWEH3CMHBS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
