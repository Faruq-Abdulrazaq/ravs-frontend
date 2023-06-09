// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEQ7g4g5xs7gydj7jGTJ56J7ELCJ1s_fc",
  authDomain: "ravs-53992.firebaseapp.com",
  projectId: "ravs-53992",
  storageBucket: "ravs-53992.appspot.com",
  messagingSenderId: "270274968645",
  appId: "1:270274968645:web:0dd9ddcab5560d1320372c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app)
export default app
