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
    apiKey: "AIzaSyCp-srUar1Fi1kFa2y5spWfmmeUR96vDI4",
    authDomain: "internetwork-1b655.firebaseapp.com",
    projectId: "internetwork-1b655",
    storageBucket: "internetwork-1b655.appspot.com",
    messagingSenderId: "885397702643",
    appId: "1:885397702643:web:ab9a5dcad6982c0cebf486"
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