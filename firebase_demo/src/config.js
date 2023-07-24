import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJYNuilWQ7-X__F-iGiStA-mNr2ViH3f0",
    authDomain: "fir-8d2ba-6c734.firebaseapp.com",
    projectId: "fir-8d2ba",
    storageBucket: "fir-8d2ba.appspot.com",
    messagingSenderId: "464351938003",
    appId: "1:464351938003:web:c8bbdbc3254131fce35b26",
    measurementId: "G-H8VLC15SF8"
  };

  export const Firebase = firebase.initializeApp(firebaseConfig)