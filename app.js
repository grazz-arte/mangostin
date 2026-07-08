const firebaseConfig = {
  apiKey: "AIzaSyB98g-NFWwOS9_c1Ojr1rwnPtjkedI5bCg",
  authDomain: "mangostin-notifications.firebaseapp.com",
  projectId: "mangostin-notifications",
  storageBucket: "mangostin-notifications.firebasestorage.app",
  messagingSenderId: "542635383072",
  appId: "1:542635383072:web:ef298991b3270a48301f45"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

const status = document.getElementById("status");

document.getElementById("btn").addEventListener("click", async () => {
  try {

    const permission = await Notification.requestPermission();

    if (permission !== "granted") {
      status.innerText = "❌ Permissão negada";
      return;
    }

    const registration = await navigator.serviceWorker.register(
      "./firebase-messaging-sw.js"
    );

    // AQUI entra a VAPID KEY
    const token = await messaging.getToken({
      vapidKey: "BFEUL8kBM5TZhjMaT5eJXmEoiTs4uBBeiphiHKjRGrwD7ocV6RCXsWBjE15Te6sv4OdMOh2WOG79rbpqtN62UeI",
      serviceWorkerRegistration: registration
    });
await fetch(
  "https://func-mangostin-g2etanh5csc7brbp.brazilsouth-01.azurewebsites.net/api/registertoken",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token: token
    })
  }
);
    console.log("TOKEN FCM:", token);

status.innerHTML = `
✅ Token gerado<br><br>
<textarea style="width:100%;height:120px;">
${token}
</textarea>
`;
  } catch (err) {
    console.error(err);
    status.innerText = "❌ Erro ao ativar notificações";
  }
});