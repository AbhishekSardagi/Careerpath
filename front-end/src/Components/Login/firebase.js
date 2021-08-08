import "firebase/auth"
import firebase from 'firebase/app'
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD1sfB2NijbKjoG1GUAazYMGf2wYbIOnJo",
    authDomain: "careerpatha.firebaseapp.com",
    projectId: "careerpatha",
    storageBucket: "careerpatha.appspot.com",
    messagingSenderId: "328721116961",
    appId: "1:328721116961:web:a773cad00424eee07cd860",
    measurementId: "G-L8G93JJQ92"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // const db = firebaseApp.firestore()
  const auth = firebaseApp.auth()
 
  export {auth,firebaseApp}


