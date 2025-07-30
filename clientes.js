// clientes.js
const clientes = {
    florencia: {
        evento: "mis XV",
        nombre: "Florencia",
        mensaje: "¡Te espero este sabado 19!",
        css: "style1.css",
        audio: "florencia.mp3"
    },
    lucia: {
        evento: "Mi Boda",
        nombre: "Lucia",
        mensaje: "¡Sera un dia inolvidable, no faltes!",
        css: "style2.css",
        audio: "lucia.mp3"
    },
    franco: {
        evento: "Mis 18",
        nombre: "Franco",
        mensaje: "¡Fiesta asegurada, no podes faltar!",
        css: "style3.css",
        audio: "franco.mp3"
    },
    eagles: {
        evento: "Fiesta de fin de año",
        nombre: "Eagles",
        mensaje: "¡Fiesta asegurada, no podes faltar!",
        css: "style4.css",
        audio: "eagles.mp3"
    },
}

// Lo hacemos accesible globalmente
window.clientes = clientes;
