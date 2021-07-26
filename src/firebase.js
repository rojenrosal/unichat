import firebase from "firebase/app" ;
import "firebase/auth";

 export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDxApzcDsEMvpvVLEt-w1h7PQuST2SnE0g",
    authDomain: "unichat-83507.firebaseapp.com",
    projectId: "unichat-83507",
    storageBucket: "unichat-83507.appspot.com",
    messagingSenderId: "757965796505",
    appId: "1:757965796505:web:68137d88f7af273e8cb408"
  }).auth();