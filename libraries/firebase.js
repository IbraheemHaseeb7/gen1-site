// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjAX8BsR_bkanoymg1sFFNt1NvvLIHi6k",
  authDomain: "genu1ne-solutions.firebaseapp.com",
  projectId: "genu1ne-solutions",
  storageBucket: "genu1ne-solutions.appspot.com",
  messagingSenderId: "222309146438",
  appId: "1:222309146438:web:2843d2cd3cfdb7df340f47",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore();
export const auth = getAuth();
