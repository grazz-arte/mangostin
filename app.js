alert("APP INICIOU");

const btn = document.getElementById("btn");
const status = document.getElementById("status");

alert(btn ? "Botão encontrado" : "Botão NÃO encontrado");
alert(status ? "Status encontrado" : "Status NÃO encontrado");

if (btn) {
    btn.onclick = function () {
        alert("BOTÃO CLICADO ❤️");
    };
}