// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};


// this code is used in case of using creat react app method not vite
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP.FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP.FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP.FIREBASE_MESSAGE_SENDER_ID,
//     appId: process.env.REACT_APP.FIREBASE_APP_ID
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
