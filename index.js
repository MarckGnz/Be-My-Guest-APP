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
    document.getElementById("mensajeLibre").textContent = c.textoLibre;
    document.getElementById("CBU"). href = c.linkCBU;
    document.getElementById("link-spotify"). href = c.linkSpotify;
    document.getElementById("link-form"). href = c.linkForm;

    const audio = document.getElementById("audio-cliente");
    audio.querySelector("source").src = `./sound/${c.audio}`;
    audio.load();

    document.getElementById("play-audio").addEventListener("click", function () {
        const audio = document.getElementById("audio-cliente");
        audio.play().catch(err => console.error("Error al reproducir audio:", err));
    });

    document.getElementById("mapa"). src = c.miniMapa;
    document.getElementById("whatsapp"). href = c.numWhatsapp; 

    // ⏳ COUNTDOWN
    const countdown = document.getElementById("countdown");
    const eventDate = c.eventDate;

    function updateCountdown() {
        const now = new Date();
        const diff = eventDate - now;

        if (diff <= 0) {
            countdown.textContent = "¡El evento ya comenzó!";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    const confirmarBtn = document.querySelector(".confirmacion .boton");

if (confirmarBtn) {
  confirmarBtn.addEventListener("click", () => {
    for (let i = 0; i < 50; i++) createConfeti();
  });
}

function createConfeti() {
  const confeti = document.createElement("div");
  confeti.classList.add("confeti");
  confeti.style.left = Math.random() * 100 + "vw";
  confeti.style.animationDuration = Math.random() * 2 + 2 + "s";
  confeti.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
  document.body.appendChild(confeti);

  // Eliminar el confeti después de 5 segundos
  setTimeout(() => confeti.remove(), 5000);
}

});