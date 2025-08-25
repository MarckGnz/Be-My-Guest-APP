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

// Definimos los clientes y sus audios
const clientes = {
    florencia: { audio: "florencia.mp3" },
    juan: { audio: "juan.mp3" },
    // agregá más clientes acá
};

// Supongamos que tenés una variable que indica el cliente actual
// Podría venir de la URL, sesión, etc. Por ejemplo:
const clienteActual = "florencia"; // reemplazá con la lógica real

// Referencias al audio y botón
const audio = document.getElementById("audio-cliente");
const btn = document.getElementById("play-audio");
const icon = btn.querySelector("i");

let isPlaying = false;

// Función para cargar el audio del cliente
function cargarAudio(cliente) {
    const source = audio.querySelector("source");
    source.src = `./sound/${cliente.audio}`;
    audio.load();
    audio.pause();
    icon.classList.remove("fa-circle-pause");
    icon.classList.add("fa-circle-play");
    btn.classList.remove("rotating");
    isPlaying = false;
}

// Cargamos el audio del cliente al iniciar
cargarAudio(clientes[clienteActual]);

// Evento del botón flotante
btn.addEventListener("click", () => {
    if (!isPlaying) {
        audio.play().catch(err => console.error("Error al reproducir audio:", err));
        icon.classList.remove("fa-circle-play");
        icon.classList.add("fa-circle-pause");
        btn.classList.add("rotating");
        isPlaying = true;
    } else {
        audio.pause();
        icon.classList.remove("fa-circle-pause");
        icon.classList.add("fa-circle-play");
        btn.classList.remove("rotating");
        isPlaying = false;
    }
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

        countdown.textContent = `${days}D ${hours}H ${minutes}M ${seconds}S`;
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