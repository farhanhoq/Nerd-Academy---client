import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAI4MYEsHXG9_3gQcXIY2wqCuVsJMA4x8",
    authDomain: "nerd-academy-79ce8.firebaseapp.com",
    projectId: "nerd-academy-79ce8",
    storageBucket: "nerd-academy-79ce8.appspot.com",
    messagingSenderId: "835934527236",
    appId: "1:835934527236:web:e7ed1703a4e4b373fbba51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export default app;
