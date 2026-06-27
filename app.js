alert("APP CARREGOU");


const firebaseConfig = {
        apiKey: "AIzaSyB98g-NFWwOS9_c1Ojr1rwnPtjkedI5bCg", 
            authDomain: "mangostin-notifications.firebaseapp.com",
                projectId: "mangostin-notifications", 
                    storageBucket: "mangostin-notifications.firebasestorage.app", // 👈 ADICIONE ESTA LINHA QUE FALTAVA
                        messagingSenderId: "542635383072",
                            appId: "1:542635383072:web:ef298991b3270a48301f45",
                                measurementId: "G-EQ258D0C9Y"
                                };



firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

const status = document.getElementById("status");

document.getElementById("btn").addEventListener("click", async () => {

    alert("BOTÃO FUNCIONOU");

    try {

        status.innerText = "Solicitando permissão...";

        const permission =
            await Notification.requestPermission();

        if (permission !== "granted") {

            status.innerText =
                "❌ Permissão negada";

            return;
        }

        status.innerText =
            "✅ Permissão concedida";

        const registration =
            await navigator.serviceWorker.register(
                "./firebase-messaging-sw.js"
            );

        status.innerText =
            "✅ Service Worker registrado";

        const token =
            await messaging.getToken({

                // TROCAR PELA SUA VAPID KEY
                vapidKey: "BFEUL8kBM5TZhjMaT5eJXmEoiTs4uBBeiphiHKjRGrwD7ocV6RCXsWBjE15Te6sv4OdMOh2WOG79rbpqtN62UeI",

                serviceWorkerRegistration:
                    registration
            });

        console.log("TOKEN FCM:");
        console.log(token);

        status.innerText =
            "✅ Token gerado!";

        alert(
            "TOKEN GERADO:\n\n" + token
        );

    } catch (err) {

        console.error(err);

        status.innerText =
            "❌ Erro: " + err.message;

        alert(
            "ERRO:\n\n" + err.message
        );
    }
});
