import firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCUPfcBc-1hRQqcq9i4uOxbtntMPVtZ3yY",
    authDomain: "handy-habits.firebaseapp.com",
    databaseURL: "https://handy-habits.firebaseio.com",
    projectId: "handy-habits",
    storageBucket: "handy-habits.appspot.com",
    messagingSenderId: "98156576275",
    appId: "1:98156576275:web:2e9efb5ea0fa8f8d1509e6"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
