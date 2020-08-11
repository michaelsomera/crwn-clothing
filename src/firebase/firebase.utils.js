import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDCsO3X9LH9ILHq25QxKlROhftx5RcjB_I",
    authDomain: "crwn-db-89473.firebaseapp.com",
    databaseURL: "https://crwn-db-89473.firebaseio.com",
    projectId: "crwn-db-89473",
    storageBucket: "crwn-db-89473.appspot.com",
    messagingSenderId: "1037490849848",
    appId: "1:1037490849848:web:eeef962332bd8f7b82becd",
    measurementId: "G-6H4MEPCSD6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
