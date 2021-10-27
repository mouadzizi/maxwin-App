import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDsARU8PkGEbUVLW3EG8Ff5NSqJ6_JDZgg",
  authDomain: "maxwin-prod.firebaseapp.com",
  projectId: "maxwin-prod",
  storageBucket: "maxwin-prod.appspot.com",
  messagingSenderId: "819451904643",
  appId: "1:819451904643:web:0215e8d861dbec206051b6",
  measurementId: "G-VXBXEE3DT4"
};
// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
export const auth = app.auth();
export const st = app.storage();
