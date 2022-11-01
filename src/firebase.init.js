// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_AUTHDOMAIN,
  authDomain: process.env.REACT_APP_PROJECTID,
  projectId: process.env.REACT_APP_STORAGEBUCKET,
  storageBucket: process.env.REACT_APP_MESSAGINGSENDERID,
  messagingSenderId: process.env.REACT_APP_APPID,
  appId: process.env.REACT_APP_APIKEY,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
