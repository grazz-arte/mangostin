importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyB98g-NFWwOS9_c1Ojr1rwnPtjkedI5bCg",
  authDomain: "mangostin-notifications.firebaseapp.com",
  projectId: "mangostin-notifications",
  storageBucket: "mangostin-notifications.firebasestorage.app",
  messagingSenderId: "542635383072",
  appId: "1:542635383072:web:ef298991b3270a48301f45"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: "/icon-192.png"
    }
  );
});