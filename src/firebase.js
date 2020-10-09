import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBQrUfOkVAcW9bICMFiB1oN7zBTHAYOQSE",
  authDomain: "hashchatz.firebaseapp.com",
  databaseURL: "https://hashchatz.firebaseio.com",
  projectId: "hashchatz",
  storageBucket: "hashchatz.appspot.com",
  messagingSenderId: "1005715147554",
  appId: "1:1005715147554:web:c923bedfe0e4d704cf737b",
  measurementId: "G-R3W9DLFYTK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider =  new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;