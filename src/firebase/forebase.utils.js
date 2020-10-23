import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyA9txj3OiDeh6xVNUsKrW8uBRtWNPae4WU",
    authDomain: "onlinestore-db-148cd.firebaseapp.com",
    databaseURL: "https://onlinestore-db-148cd.firebaseio.com",
    projectId: "onlinestore-db-148cd",
    storageBucket: "onlinestore-db-148cd.appspot.com",
    messagingSenderId: "142980084803",
    appId: "1:142980084803:web:2af827eec0f7e4a18ad0f6",
    measurementId: "G-Q9SL947HC0"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provier = new firebase.auth.GoogleAuthProvider();
  provier.setCustomParameters ({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provier);

  export default firebase;