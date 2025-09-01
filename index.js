document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const claveCliente = params.get("cliente");
  const c = window.clientes?.[claveCliente];

  if (!c) {
    console.error("Cliente no encontrado");
    document.getElementById("preloader").style.display = "none";
    document.getElementById("contenido").style.display = "block";
    return;
  }

  // === Aplicar datos del cliente ===
  document.getElementById("theme-style").href = `./styles/${c.css}`;
  document.getElementById("titulo").textContent = c.nombre || "";
  document.getElementById("evento").textContent = c.evento || "";
  document.getElementById("mensaje").textContent = c.mensaje || "";
  document.getElementById("dress-text").textContent = c.dresstext || "";
  document.getElementById("mensajeLibre").textContent = c.textoLibre || "";

  // Links
  if (c.linkCBU) document.getElementById("CBU").href = c.linkCBU;
  if (c.cbutext) document.getElementById("CBU-text").textContent = c.cbutext;
  if (c.linkSpotify) document.getElementById("link-spotify").href = c.linkSpotify;
  if (c.linkForm) document.getElementById("link-form").href = c.linkForm;
  if (c.numWhatsapp) document.getElementById("whatsapp").href = c.numWhatsapp;
  if (c.linkmaps) document.getElementById("link-maps").href = c.linkmaps;

  // Mapa embebido
  if (c.miniMapa) document.getElementById("mapa").src = c.miniMapa;

  // ===============================
  // Cargar música del cliente
  // ===============================
  const audio = document.getElementById("audio-cliente");
  if (c.audio) {
    audio.src = `./sound/${c.audio}`;
    audio.load();
  }

  // ===============================
  // Botón "Entrar" del preloader
  // ===============================
  document.getElementById("entrar-btn").addEventListener("click", function () {
    // Ocultar preloader
    const portada = document.getElementById("portada");
    portada.style.opacity = "0"; // animación fade-out
    setTimeout(() => {
      portada.style.display = "none";
    }, 500);

    document.getElementById("contenido").classList.add("visible");

    // Reproducir la música
    if (c.audio) {
      audio.play().catch(err => {
        console.error("Error al reproducir audio:", err);
      });
    }
  });

  // ===============================
  // 🎵 Botón flotante para la música
  // ===============================
  const btnAudio = document.getElementById("play-audio"); // Asegúrate de que el ID coincida
  if (btnAudio && audio) {
    // Escucha el evento 'click' en el botón flotante.
    btnAudio.addEventListener("click", function () {
      if (audio.paused) {
        audio.play().catch(err => {
          console.error("No se pudo reproducir el audio:", err);
        });
        btnAudio.textContent = "⏸️"; // Cambia a ícono de pausa
      } else {
        audio.pause();
        btnAudio.textContent = "▶️"; // Cambia a ícono de play
      }
    });

    // Añadir listeners para sincronizar el ícono del botón
    audio.addEventListener('play', () => {
      btnAudio.innerHTML = '<i class="fa-solid fa-play"></i>';
    });

    audio.addEventListener('pause', () => {
      btnAudio.innerHTML = '<i class="fa-solid fa-pause"></i>';
    });
  }

  // === Countdown dinámico ===
  function iniciarCountdown(fechaObjetivo) {
    const countdownEl = document.getElementById("countdown");

    function actualizar() {
      const ahora = new Date();
      const distancia = fechaObjetivo - ahora;

      if (distancia <= 0) {
        countdownEl.textContent = "¡El evento ya comenzó!";
        clearInterval(intervalo);
        return;
      }

      const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

      countdownEl.textContent =
        `${dias} días ${horas.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
    }

    actualizar();
    const intervalo = setInterval(actualizar, 1000);
  }

  if (c.eventDate) {
    iniciarCountdown(c.eventDate);
  }

  // === 🖼️ Grilla de fotos del cliente ===
  if (c.fotos && Array.isArray(c.fotos)) {
    const grid = document.getElementById("clientes-grid");
    if (grid) {
      c.fotos.forEach(foto => {
        const img = document.createElement("img");
        img.src = foto;
        img.alt = c.nombre;
        grid.appendChild(img);
      });

      // Animación con IntersectionObserver
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      }, { threshold: 0.3 });

      document.querySelectorAll("#clientes-grid img").forEach(img => {
        observer.observe(img);
      });
    }
  }
});
