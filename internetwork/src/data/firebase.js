// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Required for side-effects
import "firebase/firestore";
// import { 
//     getFirestore, 
//     collection, 
//     getDocs,
//     addDoc,
//     query,
//     where,
//     setDoc,
//     arrayUnion,
//     arrayRemove,
//     doc,
//  } from "firebase/firestore";
// import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyCi0nWW_ksUwL8I2VwSIty2GGi3BGcrKtw",
    authDomain: "nuswhere-e219d.firebaseapp.com",
    projectId: "nuswhere-e219d",
    storageBucket: "nuswhere-e219d.appspot.com",
    messagingSenderId: "827689257762",
    appId: "1:827689257762:web:4649238c67db99c7b8f37b"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth }; 