const invitados = [
    { nombre: "Sara Ferrotti", puestos: 1, idioma: "it" },
    { nombre: "Gianluca Ceccarelli", puestos: 1, idioma: "it" },
    { nombre: "Michele Ceccarelli", puestos: 1, idioma: "it" },
    { nombre: "Martina Ceccarelli", puestos: 2, idioma: "it" },
    { nombre: "Rita Ceccarelli", puestos: 1, idioma: "it" },
    { nombre: "Davide", puestos: 1, idioma: "it" },
    { nombre: "Claudia Ferrotti", puestos: 1, idioma: "it" },
    { nombre: "Maurizio Serra", puestos: 1, idioma: "it" },
    { nombre: "María Sanjuan", puestos: 2, idioma: "es" },
    { nombre: "Xavier Soto", puestos: 2, idioma: "es" }
];

const i18n = {
    es: {
        welcome: "¡Hola! Estamos felices de que estés aquí.",
        search_placeholder: "Introduce tu nombre y apellidos",
        search_btn: "Descubrir mi invitación",
        history_title: "Donde todo empezó...",
        history_text: "Nuestra historia no se entiende sin un mapa, un idioma compartido y aquel Erasmus en Urbino. Queremos celebrar que, después de tantos viajes y kilómetros, nuestro destino favorito sigue siendo estar juntos.",
        rsvp_reserva: "¡Hola {name}! Hemos reservado {n} puesto(s) para ti.",
        label_attendance: "¿Vienes?",
        opt_yes: "¡Allí estaré!",
        opt_no: "No puedo, me lo pierdo",
        label_bus: "¿Necesitarás plaza en el autobús?",
        label_allergies: "¿Tienes alguna alergia?",
        label_song: "Canción imprescindible:",
        btn_submit: "Confirmar",
        loc_title: "Naturaleza en estado puro",
        loc_text: "Nos casamos en Casa Catani, Barisano. Queremos disfrutar del aire libre y la buena compañía.",
        travel_title: "Consejos para el viaje",
        travel_text: "Aeropuerto cercano: Bolonia (BLQ). Trenes a Forlì cada 30 min.",
        dress_title: "Dress Code",
        dress_text: "Elegante y cómodo. Estaremos en el césped, elige bien tu calzado.",
        gift_title: "Un detalle para nosotros",
        gift_text: "Vuestra presencia es el mejor regalo. Si queréis ayudarnos con el viaje:",
        thanks: "Gracias por formar parte del viaje.",
        error_name: "No encontramos ese nombre en la lista."
    },
    it: {
        welcome: "Ciao! Siamo felici che tu sia qui.",
        search_placeholder: "Inserisci il tuo nome e cognome",
        search_btn: "Scopri il mio invito",
        history_title: "Dove tutto ebbe inizio...",
        history_text: "La nostra storia non si capisce senza una mappa, una lingua condivisa e quell'Erasmus a Urbino. Festeggiamo che la nostra destinazione preferita rimane stare insieme.",
        rsvp_reserva: "Ciao {name}! Abbiamo riservato {n} posto/i per te.",
        label_attendance: "Ci sarai?",
        opt_yes: "Ci sarò!",
        opt_no: "Non posso, mi dispiace",
        label_bus: "Avrai bisogno dell'autobus?",
        label_allergies: "Hai qualche allergia?",
        label_song: "Canzone imprescindibile:",
        btn_submit: "Conferma",
        loc_title: "Natura allo stato puro",
        loc_text: "Ci sposiamo a Casa Catani, Barisano. Vogliamo godere dell'aria aperta e della buona compagnia.",
        travel_title: "Consigli per il viaggio",
        travel_text: "Aeroporto: Bologna (BLQ). Treni per Forlì ogni 30 min.",
        dress_title: "Dress Code",
        dress_text: "Elegante e comodo. Saremo sul prato, scegli bene le scarpe.",
        gift_title: "Un pensiero per noi",
        gift_text: "La vostra presenza è il regalo più grande. Se volete aiutarci con il viaggio:",
        thanks: "Grazie per far parte del viaggio.",
        error_name: "Nome non trovato."
    }
};

let currentLang = 'es';
let invitadoActual = null;

function setLanguage(lang) {
    currentLang = lang;
    const t = i18n[lang];
    for (let key in t) {
        let el = document.getElementById(key.replace('_', '-'));
        if (el) el.innerText = t[key];
    }
    // Traducciones manuales que no siguen el patrón ID simple
    document.getElementById('welcome-msg').innerText = t.welcome;
    document.getElementById('guestInput').placeholder = t.search_placeholder;
    document.getElementById('btn-search').innerText = t.search_btn;
    if(invitadoActual) actualizarMensajeReserva();
}

function validateGuest() {
    const input = document.getElementById('guestInput').value.toLowerCase().trim();
    const guest = invitados.find(i => i.nombre.toLowerCase() === input);
    if (guest) {
        invitadoActual = guest;
        document.getElementById('access-section').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        setLanguage(guest.idioma);
        actualizarMensajeReserva();
    } else {
        const errorMsg = document.getElementById('error-msg');
        errorMsg.innerText = i18n[currentLang].error_name;
        errorMsg.style.display = 'block';
    }
}

function actualizarMensajeReserva() {
    let msg = i18n[currentLang].rsvp_reserva;
    msg = msg.replace('{name}', invitadoActual.nombre).replace('{n}', invitadoActual.puestos);
    document.getElementById('rsvp-greeting').innerText = msg;
}

function updateCountdown() {
    const weddingDate = new Date('September 12, 2026 17:00:00').getTime();
    const now = new Date().getTime();
    const diff = weddingDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('countdown').innerText = `Faltan ${days} días / Mancano ${days} giorni`;
}

updateCountdown();