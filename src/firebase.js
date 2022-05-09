import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; // for authentication
import 'firebase/compat/storage'; // for storage
import 'firebase/compat/database'; // for realtime database
import 'firebase/compat/firestore'; // for cloud firestore

const firebaseConfig = {
    apiKey: "AIzaSyCryMcdQNrwfD9Wq01mpXh4ayB4qXALalY",
    authDomain: "message-app-23659.firebaseapp.com",
    projectId: "message-app-23659",
    storageBucket: "message-app-23659.appspot.com",
    messagingSenderId: "653748724936",
    appId: "1:653748724936:web:2c0a01e7a51babfd30f1fd"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
