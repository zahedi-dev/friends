import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
    // apiKey: "AIzaSyCjvPfQPbkf8XISfytAnP2sXBi401cnQ4s",
    // authDomain: "whatsapp-clone-ea2ed.firebaseapp.com",
    // projectId: "whatsapp-clone-ea2ed",
    // storageBucket: "whatsapp-clone-ea2ed.appspot.com",
    // messagingSenderId: "672305488148",
    // appId: "1:672305488148:web:656661efa5bd8712b56201",
    apiKey: "AIzaSyD1rZsdBAAQ-3B_q1OBOYuftzRuhH960MI",
    authDomain: "friends-ff029.firebaseapp.com",
    projectId: "friends-ff029",
    storageBucket: "friends-ff029.appspot.com",
    messagingSenderId: "94942661203",
    appId: "1:94942661203:web:64ea9f1a1b541f88d694a6",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage().ref("images");
const audioStorage = firebase.storage().ref("audios");
const createTimestamp = firebase.firestore.FieldValue.serverTimestamp;
const serverTimestamp = firebase.database.ServerValue.TIMESTAMP;

export {
    db,
    auth,
    provider,
    storage,
    audioStorage,
    createTimestamp,
    serverTimestamp,
};
