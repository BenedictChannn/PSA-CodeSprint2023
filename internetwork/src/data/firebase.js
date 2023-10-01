// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore, setDoc, doc, getDoc, collection, addDoc, query, where, getDocs } from 'firebase/firestore';


const usersData = require('../data/users.json');

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

// Initialise Firestore and get a reference to the service
const db = getFirestore(app)


async function editProfileDetails(userDetails, uid) {
    await setDoc(doc(db, "users", uid), userDetails);

}


async function getProfileDetails(uid) {
    const q = query(
        collection(db, 'users'),
        where('uid', '==', uid));
  
    try {
        const querySnapshot = await getDocs(q);
        let data = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            data.push(doc.data())
        
        });
        return data

    } catch (error) {
        console.log(error);
        throw error;
    }
}


async function fetchUserProfile(uid) {
    try {
        const userData = await getProfileDetails(uid);
        // Now, userData contains the data you retrieved from Firestore.
        return(userData[0])
    } catch (error) {
        console.error(error);
    }
}

fetchUserProfile("test")

//ONLY RUN ONCE -- to load json to firebase
async function loadUserData() {
    const usersCollection = collection(db, 'users');
    usersData.forEach(user => {
        addDoc(usersCollection, user)
            .then(docRef => {
                console.log(`Document added with ID: ${docRef.id}`);
            })
            .catch(error => {
                console.error(`Error adding document: ${error}`);
            });
    });
}


export { auth, editProfileDetails, fetchUserProfile }; 