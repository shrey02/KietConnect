import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBZn1d2wq2MmMpIVPIn6hd9VQr4ZDhp_8",
  authDomain: "kietconnect-6551c.firebaseapp.com",
  databaseURL: "https://kietconnect-6551c.firebaseio.com",
  projectId: "kietconnect-6551c",
  storageBucket: "kietconnect-6551c.appspot.com",
  messagingSenderId: "836982666909",
  appId: "1:836982666909:web:00477ad52020701868c674",
  measurementId: "G-D70XQ3T9XG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth,provider};
export default db;
