import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBzJ6b5TgQpBCvrTUbl2UryNOMbe0CmroM",
  authDomain: "whatsapp-reactproject-1efb4.firebaseapp.com",
  databaseURL: "https://whatsapp-reactproject-1efb4.firebaseio.com",
  projectId: "whatsapp-reactproject-1efb4",
  storageBucket: "whatsapp-reactproject-1efb4.appspot.com",
  messagingSenderId: "553569077392",
  appId: "1:553569077392:web:c54a6676cdf91ab6017015",
  measurementId: "G-XX5JD5F7XP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
