// 1. BASE DE DATOS DE INVITADOS
// Aquí añadirás a todos tus invitados con su número de puestos
const invitados = [
    { nombre: "Sara Ferrotti", puestos: 1, idioma: "it" },
    { nombre: "Gianluca Ceccarelli", puestos: 1, idioma: "it" },
    { nombre: "Michele Ceccarelli", puestos: 1, idioma: "it" },
    { nombre: "Martina Ceccarelli", puestos: 2, idioma: "it" },
    { nombre: "Rita Ceccarelli", puestos: 1, idioma: "it" },
    { nombre: "Davide", puestos: 1, idioma: "it" },
    { nombre: "Claudia Ferrotti", puestos: 1, idioma: "it" },
    { nombre: "Maurizio Serra", puestos: 1, idioma: "it" },
    { nombre: "María Sanjuan", puestos: 2, idioma: "es" }
];

// 2. DICCIONARIO BILINGÜE
const i18n = {
    es: {
        welcome: "¡Hola! Estamos felices de que estés aquí.",
        search_placeholder: "Introduce tu nombre y apellidos",
        search_btn: "Descubrir mi invitación",
        history_title: "Donde todo empezó...",
        history_text: "Nuestra historia no se entiende sin un mapa, un idioma compartido y aquel Erasmus en Urbino. Queremos celebrar que, después de tantos viajes y kilómetros, nuestro destino favorito sigue siendo estar juntos. ¡Gracias por acompañarnos!",
        rsvp_reserva: "¡Hola {name}! Hemos reservado {n} puesto(s) para ti.",
        label_attendance: "¿Vienes?",
        opt_yes: "¡Allí estaré!",
        opt_no: "No puedo, me lo pierdo",
        label_bus: "¿Necesitarás plaza en el autobús para ir del hotel a la finca?",
        label_allergies: "¿Tienes alguna alergia o restricción alimentaria? Cuéntanos para que podamos cuidar de ti.",
        label_song: "Esa canción que no puede faltar para que lo des todo en la pista:",
        btn_submit: "Confirmar",
        loc_title: "Naturaleza en estado puro",
        loc_text: "Nos casamos en Casa Catani, un rincón mágico rodeado de árboles en Barisano. Queremos que este día sea un respiro, un momento para disfrutar del aire libre, del bosque y de la buena compañía en plena naturaleza.",
        travel_title: "Consejos para el viaje",
        travel_text: "Saldremos todos juntos desde el hotel hacia Casa Catani. No te preocupes por el coche. El aeropuerto más cercano es el de Boloña (BLQ). Desde allí, el 'Marconi Express' os lleva a la estación central en 7 minutos. Trenes a Forlì/Cesena cada 30 min.",
        dress_title: "Dress Code",
        dress_text: "Queremos que te veas increíble, pero sobre todo que te sientas tú mismo. El estilo es elegante y cómodo. Siéntete libre. Estaremos en el césped, en pleno bosque, así que elige tu calzado teniendo esto en cuenta.",
        gift_title: "Un detalle para nosotros",
        gift_text: "Vuestra presencia es nuestro mejor regalo. Si deseáis hacernos un regalo para construir nuestro nuevo viaje juntos:",
        thanks: "Gracias por formar parte del viaje.",
        error_name: "Lo sentimos, no encontramos ese nombre en la lista. Revisa si está bien escrito."
    },
    it: {
        welcome: "Ciao! Siamo felici che tu sia qui.",
        search_placeholder: "Inserisci il tuo nome e cognome",
        search_btn: "Scopri il mio invito",
        history_title: "Dove tutto ebbe inizio...",
        history_text: "La nostra storia non si capisce senza una mappa, una lingua condivisa e quell'Erasmus a Urbino. Vogliamo festeggiare che, dopo tanti viaggi e chilometri, la nostra destinazione preferita rimane stare insieme. Grazie per accompagnarci!",
        rsvp_reserva: "Ciao {name}! Abbiamo riservato {n} posto/i per te.",
        label_attendance: "Ci sarai?",
        opt_yes: "Ci sarò!",
        opt_no: "Non posso, mi dispiace",
        label_bus: "Avrai bisogno di un posto sull'autobus per andare dall'hotel alla villa?",
        label_allergies: "Hai qualche allergia o restrizione alimentare? Raccontacelo, così potremo prenderci cura di te.",
        label_song: "Quella canzone che non può mancare per darti la carica in pista:",
        btn_submit: "Conferma",
        loc_title: "Natura allo stato puro",
        loc_text: "Ci sposiamo a Casa Catani, un angolo magico circondato dagli alberi a Barisano. Vogliamo che questo giorno sia un respiro, un momento per godersi l'aria aperta, il bosco e la buona compagnia in piena natura.",
        travel_title: "Consigli per il viaggio",
        travel_text: "Partiremo tutti insieme dall'hotel verso Casa Catani. Non preoccuparti per l'auto. L'aeroporto più vicino è quello di Bologna (BLQ). Da lì, il 'Marconi Express' vi porta alla stazione centrale in 7 minuti. Treni per Forlì/Cesena ogni 30 min.",
        dress_title: "Dress Code",
        dress_text: "Vogliamo che tu sia splendido/a, ma soprattutto che tu ti senta te stesso/a. Lo stile è elegante e comodo. Sentiti libero/a. Saremo sul prato, in pieno bosco, quindi scegli le tue scarpe tenendo conto di questo.",
        gift_title: "Un pensiero per noi",
        gift_text: "La vostra presenza è il nostro regalo più grande. Se desiderate farci un regalo per costruire il nostro nuovo viaggio insieme:",
        thanks: "Grazie per far parte del viaggio.",
        error_name: "Spiacenti, non troviamo questo nome nella lista. Controlla se è scritto correttamente."
    }
};

let currentLang = 'es';
let invitadoActual = null;

// 3. FUNCIÓN PARA CAMBIAR IDIOMA
function setLanguage(lang) {
    currentLang = lang;
    const t = i18n[lang];

    // Actualizar textos por ID
    document.getElementById('welcome-msg').innerText = t.welcome;
    document.getElementById('guestInput').placeholder = t.search_placeholder;
    document.getElementById('btn-search').innerText = t.search_btn;
    document.getElementById('story-title').innerText = t.history_title;
    document.getElementById('story-text').innerText = t.history_text;
    document.getElementById('label-attendance').innerText = t.label_attendance;
    document.getElementById('opt-yes').innerText = t.opt_yes;
    document.getElementById('opt-no').innerText = t.opt_no;
    document.getElementById('label-bus').innerText = t.label_bus;
    document.getElementById('label-allergies').innerText = t.label_allergies;
    document.getElementById('label-song').innerText = t.label_song;
    document.getElementById('btn-submit').innerText = t.btn_submit;
    document.getElementById('location-title').innerText = t.loc_title;
    document.getElementById('location-text').innerText = t.loc_text;
    document.getElementById('travel-title').innerText = t.travel_title;
    document.getElementById('travel-text').innerText = t.travel_text;
    document.getElementById('dress-title').innerText = t.dress_title;
    document.getElementById('dress-text').innerText = t.dress_text;
    document.getElementById('gift-title').innerText = t.gift_title;
    document.getElementById('gift-text').innerText = t.gift_text;
    document.getElementById('thanks-text').innerText = t.thanks;

    if(invitadoActual) actualizarMensajeReserva();
}

// 4. VALIDAR INVITADO
function validateGuest() {
    const input = document.getElementById('guestInput').value.toLowerCase().trim();
    const guest = invitados.find(i => i.nombre.toLowerCase() === input);

    if (guest) {
        invitadoActual = guest;
        document.getElementById('access-section').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        setLanguage(guest.idioma); // Ajusta el idioma al preferido del invitado
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

// 5. CUENTA REGRESIVA
function updateCountdown() {
    const weddingDate = new Date('September 12, 2026 17:00:00').getTime();
    const now = new Date().getTime();
    const diff = weddingDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('countdown').innerText = `Faltan ${days} días / Mancano ${days} giorni`;
}

// Inicializar
updateCountdown();