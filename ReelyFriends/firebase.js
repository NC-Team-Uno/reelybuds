// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';



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
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

