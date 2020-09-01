import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD5NSqT2vYJoszxKe_j-bTEigqhWLBYfM8",
  authDomain: "comarch-c27dc.firebaseapp.com",
  databaseURL: "https://comarch-c27dc.firebaseio.com",
  projectId: "comarch-c27dc",
  storageBucket: "comarch-c27dc.appspot.com",
  messagingSenderId: "75509912384",
  appId: "1:75509912384:web:5b53e74955fd5c99f760a5",
  measurementId: "G-PCFMQG97GG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider =  new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;