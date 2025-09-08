import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADhxfAEnCFRYdGeFiaiMEE_4BOr25cNLw",
  authDomain: "slack-clone-2bb91.firebaseapp.com",
  projectId: "slack-clone-2bb91",
  storageBucket: "slack-clone-2bb91.firebasestorage.app",
  messagingSenderId: "187060712329",
  appId: "1:187060712329:web:92c73fdc6c15114ecc6758",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
