// index.js
document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const claveCliente = params.get("cliente");

    const c = window.clientes?.[claveCliente];

    if (!c) {
        console.error("Cliente no encontrado");
        return;
    }

    document.getElementById("theme-style").href = `./styles/${c.css}`;
    document.getElementById("titulo").textContent = `${c.nombre}`;
    document.getElementById("evento").textContent = `${c.evento}`;
    document.getElementById("mensaje").textContent = `${c.mensaje}`;
    const audio = document.getElementById("audio-cliente");
    audio.querySelector("source").src = `./sound/${c.audio}`;
    audio.load();
    
    document.getElementById("play-audio").addEventListener("click", function () {
    const audio = document.getElementById("audio-cliente");
    audio.play().catch(err => console.error("Error al reproducir audio:", err));
});
})
