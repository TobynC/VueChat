import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD1ZgMC5FMnvBi4p8ZmC3zy1RGa1xAaHvU",
    authDomain: "vue-chat-da1ef.firebaseapp.com",
    databaseURL: "https://vue-chat-da1ef.firebaseio.com",
    projectId: "vue-chat-da1ef",
    storageBucket: "",
    messagingSenderId: "778161737264"
  };
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();