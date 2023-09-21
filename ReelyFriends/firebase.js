// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {initializeAuth, getReactNativePersistence} from "firebase/firebase-auth";
import ReactNativeAsyncStorage from "@react-native-async-storage"

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
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = initializeAuth(app,{persistance: getReactNativePersistence(ReactNativeAsyncStorage)})
