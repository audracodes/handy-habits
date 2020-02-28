import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCUPfcBc-1hRQqcq9i4uOxbtntMPVtZ3yY",
    authDomain: "handy-habits.firebaseapp.com",
    databaseURL: "https://handy-habits.firebaseio.com",
    projectId: "handy-habits",
    storageBucket: "handy-habits.appspot.com",
    messagingSenderId: "98156576275",
    appId: "1:98156576275:web:2e9efb5ea0fa8f8d1509e6"
};
firebase.initializeApp(config);

export default firebase;


// <!-- The core Firebase JS SDK is always required and must be listed first -->
{/* <script src="https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js"></script> */}
