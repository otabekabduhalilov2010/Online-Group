import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXKd158nRrAWgC19N0fjt8qqSpYFGt2p8",
  authDomain: "online-group-sd.firebaseapp.com",
  projectId: "online-group-sd",
  storageBucket: "online-group-sd.appspot.com", // ✅ Исправлено
  messagingSenderId: "914123654980",
  appId: "1:914123654980:web:cc01f3f12bf8a5d53d7911",
  measurementId: "G-040GLWSYE0"
};

const app = firebase.initializeApp(firebaseConfig);
export const firestore = app.firestore();
export const auth = app.auth();
