alert("APP INICIOU");

const firebaseConfig = {
    apiKey: "...",
    authDomain: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "...",
    measurementId: "..."
};

alert("ANTES DO INITIALIZE");

firebase.initializeApp(firebaseConfig);

alert("DEPOIS DO INITIALIZE");

const messaging = firebase.messaging();

alert("FIREBASE OK");