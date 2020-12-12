import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDIHZS1LEWoTWb3zeCBVsQ0gjbEcQolerM",
  authDomain: "olx-replica-reactjs.firebaseapp.com",
  databaseURL: "https://olx-replica-reactjs.firebaseio.com",
  projectId: "olx-replica-reactjs",
  storageBucket: "olx-replica-reactjs.appspot.com",
  messagingSenderId: "798552050133",
  appId: "1:798552050133:web:b483760bfd2d5c0774155c"
};
// Initialize Firebase
export const fire = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const storage = firebase.storage();
export const database = firebase.database();
export const provider = new firebase.auth.GoogleAuthProvider();
