// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/auth"
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyBhip6cAuzau705ZbxX-nHzcDHo3_sqoIw",
  authDomain: "autheticationfirebase-cb238.firebaseapp.com",
  projectId: "autheticationfirebase-cb238",
  storageBucket: "autheticationfirebase-cb238.appspot.com",
  messagingSenderId: "474355636259",
  appId: "1:474355636259:web:129b75a4a690c7a38a3996",
  measurementId: "G-0Q3P19Y250",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
