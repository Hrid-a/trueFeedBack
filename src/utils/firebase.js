import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: import.meta.env.VITE_FIREBASE_KEY,

    authDomain: import.meta.env.VITE_AUTH_DOMAIN,

    projectId: import.meta.env.VITE_PROJECT_ID,

    storageBucket: import.meta.env.VITE_STORAGE_BUCKET_ID,

    messagingSenderId: import.meta.env.VITE_MESSAGE_ID,

    appId: import.meta.env.VITE_APP_ID

};




// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()