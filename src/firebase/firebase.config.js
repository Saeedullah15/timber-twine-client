// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBq2WuFOCRT2RkDkZ10TV1A6KaRy7wI3Ec",
    authDomain: "art-and-craft-store-5c440.firebaseapp.com",
    projectId: "art-and-craft-store-5c440",
    storageBucket: "art-and-craft-store-5c440.appspot.com",
    messagingSenderId: "459440484808",
    appId: "1:459440484808:web:653333d3d4b9ff0a7bd0fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;