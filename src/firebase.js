import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: " ", //put your API Key between " "
    authDomain: "netflix-clone-1496d.firebaseapp.com",
    projectId: "netflix-clone-1496d",
    storageBucket: "netflix-clone-1496d.appspot.com",
    messagingSenderId: "505065763519",
    appId: "1:505065763519:web:26b230b29b102e92cc8c0a"
};

const firebaseApp = initializeApp(firebaseConfig);
/*const db = firebaseApp.firestore();*/
const auth = getAuth();

export { auth, firebaseApp };
/*export default db;*/
