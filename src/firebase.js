// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
//import firebase from 'firebase/app';
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUmDpk_g94V8XSR_UsHcKSSnuuvnW7k-M",
  authDomain: "uplang-25216.firebaseapp.com",
  projectId: "uplang-25216",
  storageBucket: "uplang-25216.appspot.com",
  messagingSenderId: "672963215307",
  appId: "1:672963215307:web:e2e40816e4df335802004e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//export const auth = firebase.auth();
export const auth = getAuth(app);
//export default firebase;

