import firebase from "firebase";

// firebase website FirebasConfig

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCpTDtVN-TQZCVUfsvwy7jdTRr9ZU0xqnQ",
  authDomain: "clone-app-f76de.firebaseapp.com",
  projectId: "clone-app-f76de",
  storageBucket: "clone-app-f76de.appspot.com",
  messagingSenderId: "1050597571627",
  appId: "1:1050597571627:web:1869070e806e81ea353e6e",
  measurementId: "G-V3T5GZEYS2",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

//with this added need to go on the terminal to conect our terminal with firebase
//npm i firebase
