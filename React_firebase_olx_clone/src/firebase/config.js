import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnXXagAEL0rhG_MvzP7tP0IVFgCjoSbaQ",
    authDomain: "olx-clone-34788.firebaseapp.com",
    projectId: "olx-clone-34788",
    storageBucket: "olx-clone-34788.appspot.com",
    messagingSenderId: "563490768375",
    appId: "1:563490768375:web:7e89da136142b7f20e5af2",
    measurementId: "G-G3EK2S45Y5"
  };

  export default firebase.initializeApp(firebaseConfig)