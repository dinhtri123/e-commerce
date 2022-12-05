import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyB5f_SCwQBz01M3zqTR6ldhLa8rqXzBF9E",
  authDomain: "e-commerce-bf455.firebaseapp.com",
  projectId: "e-commerce-bf455",
  storageBucket: "e-commerce-bf455.appspot.com",
  messagingSenderId: "279021597055",
  appId: "1:279021597055:web:fa26d371bdc14dab1cea4a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)
export default app;
