const firebaseConfig = {
  apiKey: "AIzaSyB98g-NFWwOS9_c1Ojr1rwnPtjkedI5bCg",
  authDomain: "mangostin-notifications.firebaseapp.com",
  projectId: "mangostin-notifications",
  storageBucket: "mangostin-notifications.firebasestorage.app",
  messagingSenderId: "542635383072",
  appId: "1:542635383072:web:ef298991b3270a48301f45"
};
let deferredPrompt = null;

const installBtn = document.getElementById("installBtn");
console.log("InstallBtn:", installBtn);

function iniciarFirebase() {

    firebase.initializeApp(firebaseConfig);

    return firebase.messaging();

}
const messaging = iniciarFirebase();
const status = document.getElementById("status");

window.addEventListener("beforeinstallprompt", (e) => {

    e.preventDefault();

    deferredPrompt = e;

    installBtn.style.display = "block";

    console.log("Mangostin pode ser instalado");

});

window.addEventListener("appinstalled", () => {

    console.log("Mangostin instalado ❤️");

    installBtn.style.display = "none";

});

installBtn.addEventListener("click", async () => {

    if (!deferredPrompt) {
        alert("Instalação não disponível neste dispositivo.");
        return;
    }

    deferredPrompt.prompt();

    const result = await deferredPrompt.userChoice;

    console.log("Resultado:", result.outcome);

    deferredPrompt = null;

    installBtn.style.display = "none";

});
console.log("Botão encontrado:", document.getElementById("btn"));

document.getElementById("btn").addEventListener("click", async () => {

    console.log("CLIQUE FUNCIONOU");

    try {
const permission = await Notification.requestPermission();
console.log("Permissão:", permission);

    if (permission !== "granted") {
      status.innerText = "❌ Permissão negada";
      return;
    }

    let registration = await navigator.serviceWorker.getRegistration();
console.log("Registration:", registration);

if (!registration) {
    registration = await navigator.serviceWorker.register(
        "./firebase-messaging-sw.js"
    );
}

await navigator.serviceWorker.ready;

const token = await messaging.getToken({
  vapidKey: "BFEUL8kBM5TZhjMaT5eJXmEoiTs4uBBeiphiHKjRGrwD7ocV6RCXsWBjE15Te6sv4OdMOh2WOG79rbpqtN62UeI",
  serviceWorkerRegistration: registration
});
console.log("Token recebido:", token);
const savedToken = localStorage.getItem("fcmToken");
console.log("Token atual:", token);
console.log("Token salvo:", savedToken);

if (savedToken !== token) {

    console.log("Token novo detectado");

    const response = await fetch(
        "https://func-mangostin-g2etanh5csc7brbp.brazilsouth-01.azurewebsites.net/api/registertoken",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
    token: token,
    userAgent: navigator.userAgent
})
        }
    );

    console.log("STATUS:", response.status);

    const data = await response.text();
    console.log("RESPOSTA:", data);

    localStorage.setItem("fcmToken", token);

} else {

    console.log("Token já cadastrado");

}

console.log("TOKEN FCM:", token);

status.innerHTML = "✅ Notificações ativadas";
  } catch (err) {
    console.error(err);
    status.innerText = "❌ Erro ao ativar notificações";
  }
});
console.log("Manifest encontrado:",
    document.querySelector('link[rel="manifest"]'));

console.log("Standalone:",
    window.matchMedia('(display-mode: standalone)').matches);

console.log("ServiceWorker:",
    navigator.serviceWorker);