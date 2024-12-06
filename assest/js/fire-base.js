import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs,  doc, setDoc,  } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDC2KPlKBno5KPuSDeoDHUnrmdLe96R2OI",
  authDomain: "blog-app-1e3ae.firebaseapp.com",
  projectId: "blog-app-1e3ae",
  storageBucket: "blog-app-1e3ae.firebasestorage.app",
  messagingSenderId: "680779967075",
  appId: "1:680779967075:web:71190389a39f81e71da656",
  measurementId: "G-Q27NYTF5HB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export{ auth, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, getFirestore, db, collection,  doc, setDoc, addDoc,  sendPasswordResetEmail, getDocs  }
