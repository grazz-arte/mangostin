alert("APP INICIOU");

const firebaseConfig = {
  apiKey: "AIzaSyB98g-NFWwOS9_c1Ojr1rwnPtjkedI5bCg",
  authDomain: "mangostin-notifications.firebaseapp.com",
  projectId: "mangostin-notifications",
  storageBucket: "mangostin-notifications.firebasestorage.app",
  messagingSenderId: "542635383072",
  appId: "1:542635383072:web:ef298991b3270a48301f45"
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

    try {
    const token = await messaging.getToken({
        vapidKey: "BFEUL8kBM5TZhjMaT5eJXmEoiTs4uBBeiphiHKjRGrwD7ocV6RCXsWBjE15Te6sv4OdMOh2WOG79rbpqtN62UeI",
        serviceWorkerRegistration: registration
    });

    alert("TOKEN:\n\n" + token);
    console.log(token);

} }catch (err) {

    console.error("ERRO COMPLETO:", err);

    alert(
        JSON.stringify(err, null, 2)
    );

}

alert("DEPOIS DO INITIALIZE");

const messaging = firebase.messaging();

alert("FIREBASE OK");