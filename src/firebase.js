// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBhnzS6fmvT3OYOqgVGP6F0ILfO9xmV9SM",
    authDomain: "fb-clone-3d106.firebaseapp.com",
    projectId: "fb-clone-3d106",
    storageBucket: "fb-clone-3d106.appspot.com",
    messagingSenderId: "430317666815",
    appId: "1:430317666815:web:adae6658e1b3afb5bc67ca",
    measurementId: "G-X8ZBR0D1W5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;