import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: process.env.FB_APIKEY,
    authDomain: process.env.FB_AUTHDOMAIN,
    databaseURL: "https://gahackathon-95ace.firebaseio.com",
    projectId: "gahackathon-95ace",
    storageBucket: "gahackathon-95ace.appspot.com",
    messagingSenderId: "280556010028",
    appId: "1:280556010028:web:fcf6342ad620a807"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();


export default firebase;