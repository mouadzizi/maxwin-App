import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAL7uoCd9rP0SMvSQjZys5hmp2dbOVZz0g",
    authDomain: "maxwin-app-dev.firebaseapp.com",
    projectId: "maxwin-app-dev",
    storageBucket: "maxwin-app-dev.appspot.com",
    messagingSenderId: "59001880008",
    appId: "1:59001880008:web:ea6b91097540f1658a54fd"
};
// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
export const auth = app.auth();
export const st = app.storage();