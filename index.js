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

  // 🎶 Audio
  const audio = document.getElementById("audio-cliente");
  if (audio && c.audio) {
    audio.querySelector("source").src = `./sound/${c.audio}`;
    audio.load();
  }

  // 📅 Calendario (.ics)
  const fechaEvento = document.getElementById("fecha-evento");
  const btnCalendario = document.getElementById("btnCalendario");
  if (fechaEvento && c.fechaTexto) fechaEvento.textContent = c.fechaTexto;
  if (btnCalendario && c.ics) {
    btnCalendario.href = `/ics/${c.ics}`;
    btnCalendario.download = c.ics;
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

    actualizar(); // primera ejecución inmediata
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

  // === Mostrar página (preloader OFF) ===
  window.addEventListener("load", function () {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("contenido").style.display = "block";
  });
});
