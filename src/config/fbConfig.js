import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsnvZZlzDMjMK9y28wviMd40AKWFtHqMo",
  authDomain: "konafatraining.firebaseapp.com",
  databaseURL: "https://konafatraining.firebaseio.com",
  projectId: "konafatraining",
  storageBucket: "konafatraining.appspot.com",
  messagingSenderId: "855226651663",
  appId: "1:855226651663:web:077987300b049340183f7a",
  measurementId: "G-90VRFQ5DRS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
