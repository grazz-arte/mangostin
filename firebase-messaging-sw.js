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

  console.log("Mensagem recebida em background:", payload);

  const notificationTitle =
    payload.notification?.title || "Mangostin";

  const notificationOptions = {
    body: payload.notification?.body || "",
    icon: "https://grazz-arte.github.io/mangostin/icon-192.png",
    badge: "https://grazz-arte.github.io/mangostin/icon-192.png",
    requireInteraction: true
  };

  self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

console.log("Firebase SW carregado");