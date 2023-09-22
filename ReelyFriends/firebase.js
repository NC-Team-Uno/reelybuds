// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@react-native-firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiSls7TDPEqa0GAyvyKQstF4cuY0adHjo",
  authDomain: "reelybuds.firebaseapp.com",
  projectId: "reelybuds",
  storageBucket: "reelybuds.appspot.com",
  messagingSenderId: "78857047878",
  appId: "1:78857047878:web:8748b54571ba83c1689f47",
  measurementId: "G-QT3V24LT0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
