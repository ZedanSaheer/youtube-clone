import firebase from "firebase"
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAd9UBO4Z2yXh4wk0y6JCb5xU3zsWejr2I",
    authDomain: "utube-by-zedan.firebaseapp.com",
    projectId: "utube-by-zedan",
    storageBucket: "utube-by-zedan.appspot.com",
    messagingSenderId: "815995261384",
    appId: "1:815995261384:web:d6afa850833ec4e28530fd",
    measurementId: "G-CNVHSJTYG9"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.auth();