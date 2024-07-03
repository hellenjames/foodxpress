// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5s-VnZGgHPhHxyrdhKMBXf_dfqqF2c_8",
  authDomain: "foodxpress-90790.firebaseapp.com",
  projectId: "foodxpress-90790",
  storageBucket: "foodxpress-90790.appspot.com",
  messagingSenderId: "185614953577",
  appId: "1:185614953577:web:68d88abd14b68cd57446f8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


