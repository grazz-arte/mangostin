alert("APP INICIOU PRAISE BE");

const status = document.getElementById("status");

if (status) {
    status.innerText = "✅ app.js carregou!";
    alert("STATUS ENCONTRADO");
} else {
    alert("STATUS NÃO ENCONTRADO");
}