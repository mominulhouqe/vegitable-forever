// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPyE5ZAXuzaxfPvsDPZUU78Q1CoARub78",
  authDomain: "vegitable-ecomerce.firebaseapp.com",
  projectId: "vegitable-ecomerce",
  storageBucket: "vegitable-ecomerce.appspot.com",
  messagingSenderId: "294535279601",
  appId: "1:294535279601:web:d70568799bef82cd3d8a50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;