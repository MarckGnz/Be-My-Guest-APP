// clientes.js
const clientes = {
    florencia: {
        evento: "mis XV",
        nombre: "Florencia",
        mensaje: "¡Te espero este sabado 19!",
        css: "style1.css",
        audio: "florencia.mp3",
        eventDate: new Date("2025-11-01T14:00:00"),
        miniMapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0192411598705!2d-58.38463507514658!3d-34.60367495749435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1753141499729!5m2!1ses!2sar",
        numWhatsapp: "https://wa.me/5491234567890?text=¡Hola! Confirmo mi asistencia al cumple de Florencia 🎉"
    },
    lucia: {
        evento: "Mi Boda",
        nombre: "Lucia",
        mensaje: "¡Sera un dia inolvidable, no faltes!",
        css: "style2.css",
        audio: "lucia.mp3",
        eventDate: new Date("2027-05-27T14:00:00"),
        miniMapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0192411598705!2d-58.38463507514658!3d-34.60367495749435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1753141499729!5m2!1ses!2sar",
        numWhatsapp: "https://wa.me/5491234569078?text=¡Hola! Confirmo mi asistencia a la boda de Lucia 🎉"
    },
    franco: {
        evento: "Mis 18",
        nombre: "Franco",
        mensaje: "¡Fiesta asegurada, no podes faltar!",
        css: "style3.css",
        audio: "franco.mp3",
        eventDate: new Date("2026-02-11T14:00:00"),
        miniMapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0192411598705!2d-58.38463507514658!3d-34.60367495749435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1753141499729!5m2!1ses!2sar",
        numWhatsapp: "https://wa.me/5493214567890?text=¡Hola! Confirmo mi asistencia al cumple de Franco 🎉"
    },
    eagles: {
        evento: "Fiesta de fin de año",
        nombre: "Eagles",
        mensaje: "¡Fiesta asegurada, no podes faltar!",
        css: "style4.css",
        audio: "eagles.mp3",
        eventDate: new Date("2025-12-01T14:00:00"),
        miniMapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52540.41888601246!2d-58.46470387832027!3d-34.6098208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac2cd859503%3A0x75cdafaaef2b946!2sCongreso%20de%20la%20Naci%C3%B3n%20Argentina!5e0!3m2!1ses!2sar!4v1753922427772!5m2!1ses!2sar",
        numWhatsapp: "https://wa.me/5491234657890?text=¡Hola! Confirmo mi asistencia al la fiesta de Eagles 🎉"
    },
}

// Lo hacemos accesible globalmente
window.clientes = clientes;
