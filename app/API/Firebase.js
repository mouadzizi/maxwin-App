import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAchAoGI9t0s0D1olJVmNIvJw0cPDPguIU",
    authDomain: "maxwin-app.firebaseapp.com",
    projectId: "maxwin-app",
    storageBucket: "maxwin-app.appspot.com",
    messagingSenderId: "341574145570",
    appId: "1:341574145570:web:ea04fd17d1a9c4687f1c7b"
  
};
// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
export const auth = app.auth();
export const st = app.storage();