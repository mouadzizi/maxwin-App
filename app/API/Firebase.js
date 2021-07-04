import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDHgZAAUP5oomuY2EE_N5mzcK2t-hgJNaQ",
  authDomain: "maxwin-35d61.firebaseapp.com",
  databaseURL: "https://maxwin-35d61.firebaseio.com",
  projectId: "maxwin-35d61",
  storageBucket: "maxwin-35d61.appspot.com",
  messagingSenderId: "296245537422",
  appId: "1:296245537422:web:8f10a04a61f99e206677df",
  measurementId: "G-2LQX99YNHL",
};
// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
export const auth = app.auth();
export const st = app.storage();
