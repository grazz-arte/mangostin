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
document.getElementById("btn").addEventListener("click", async () => {

    alert("BOTÃO CLICADO");

    alert("ANTES DA PERMISSÃO");

    const permission = await Notification.requestPermission();

    alert("PERMISSÃO: " + permission);

    alert("ANTES DO SERVICE WORKER");

    const registration = await navigator.serviceWorker.register("./firebase-messaging-sw.js");

    alert("SERVICE WORKER OK");

    alert("ANTES DO TOKEN");

    const token = await messaging.getToken({
        vapidKey: "BFEUL8kBM5TZhjMaT5eJXmEoiTs4uBBeiphiHKjRGrwD7ocV6RCXsWBjE15Te6sv4OdMOh2WOG79rbpqtN62UeI",
        serviceWorkerRegistration: registration
    });

    alert("TOKEN OK");

    console.log(token);
});

alert("DEPOIS DO INITIALIZE");

const messaging = firebase.messaging();

alert("FIREBASE OK");