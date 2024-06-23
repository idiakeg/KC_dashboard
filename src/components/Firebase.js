// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAA9k4eTx_HAeCMYaFnI2u67RfHUzMBtc0",
    authDomain: "kc-dashboard.firebaseapp.com",
    projectId: "kc-dashboard",
    storageBucket: "kc-dashboard.appspot.com",
    messagingSenderId: "773619559410",
    appId: "1:773619559410:web:e6b67c091bc8b8cf63596b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

export default app;
