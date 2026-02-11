const invitados = [
    { nombre: "Sara Cecarrelli", puestos: 1, idioma: "it" },
    { nombre: "Gianluca Ceccarrelli", puestos: 1, idioma: "it" },
    { nombre: "Francesco Dall' Ara", puestos: 1, idioma: "it" },
    { nombre: "Martina Ceccarelli", puestos: 1, idioma: "it" },
    { nombre: "Letizia Ceccarelli", puestos: 2, idioma: "it" },
    { nombre: "Michele Ceccarelli", puestos: 1, idioma: "it" },
    { nombre: "Rita Ceccarelli", puestos: 2, idioma: "it" },
    { nombre: "Claudia Ferrotti", puestos: 2, idioma: "it" },
    { nombre: "Marco Serra", puestos: 2, idioma: "it" },
    { nombre: "Daniele Serra", puestos: 2, idioma: "it" },
    { nombre: "Federico Serra", puestos: 2, idioma: "it" },
    { nombre: "Maurizio Dall' Ara", puestos: 2, idioma: "it" },
    { nombre: "Bella González", puestos: 1, idioma: "es" },
    { nombre: "Jose Manuel García", puestos: 1, idioma: "es" },
    { nombre: "Luis García", puestos: 1, idioma: "es" },
    { nombre: "Belen Martínez", puestos: 1, idioma: "es" },
    { nombre: "Inmaculada Aponte", puestos: 2, idioma: "es" },
    { nombre: "Alejandro Prieto", puestos: 2, idioma: "es" },
    { nombre: "Juanjo Prieto", puestos: 1, idioma: "es" },
    { nombre: "María Sanjuan", puestos: 2, idioma: "es" },
    { nombre: "Victoria", puestos: 2, idioma: "es" },
    { nombre: "tita Mariló Antonio y Antonio", puestos: 3, idioma: "es" },
    { nombre: "Virginia Toni, Mario", puestos: 3, idioma: "es" },
    { nombre: "filo Aletti", puestos: 2, idioma: "it" },
    { nombre: "Riccardo Lughi", puestos: 1, idioma: "it" },
    { nombre: "Nico", puestos: 2, idioma: "it" },
    { nombre: "Brando", puestos: 1, idioma: "it" },
    { nombre: "Guido", puestos: 1, idioma: "it" },
    { nombre: "Gianmarco", puestos: 1, idioma: "it" },
    { nombre: "Nicola", puestos: 1, idioma: "it" },
    { nombre: "Silvia", puestos: 1, idioma: "it" },
    { nombre: "Alessandra", puestos: 1, idioma: "it" },
    { nombre: "Simo", puestos: 1, idioma: "it" },
    { nombre: "Rissa", puestos: 1, idioma: "it" },
    { nombre: "Jesus Camacho", puestos: 1, idioma: "es" },
    { nombre: "Natalia Garrido", puestos: 2, idioma: "es" },
    { nombre: "Lara Troncoso", puestos: 1, idioma: "es" },
    { nombre: "Libania Hidalgo", puestos: 2, idioma: "es" },
    { nombre: "Isaac", puestos: 1, idioma: "es" },
    { nombre: "Nagore Manuel", puestos: 2, idioma: "es" },
    { nombre: "Pablo Castro", puestos: 2, idioma: "es" },
    { nombre: "Rosa Flores", puestos: 1, idioma: "es" },
    { nombre: "Rocío Perez", puestos: 1, idioma: "es" },
    { nombre: "María López", puestos: 2, idioma: "es" },
    { nombre: "Eva Jiménez", puestos: 1, idioma: "es" },
    { nombre: "Alicia", puestos: 1, idioma: "es" },
    { nombre: "Paula", puestos: 1, idioma: "es" },
    { nombre: "Andrea", puestos: 1, idioma: "es" },
    { nombre: "Clara Lleido", puestos: 1, idioma: "es" },
    { nombre: "Xavier Soto", puestos: 2, idioma: "es" },
    { nombre: "Hugo", puestos: 1, idioma: "es" },
    { nombre: "Pere", puestos: 1, idioma: "es" },
    { nombre: "Joshua", puestos: 1, idioma: "es" },
    { nombre: "Pedro Tena", puestos: 1, idioma: "es" },
    { nombre: "Pedro Manuel", puestos: 1, idioma: "es" },
    { nombre: "Abel", puestos: 1, idioma: "es" },
    { nombre: "tex", puestos: 1, idioma: "it" }
];


// 2. DICCIONARIO DE IDIOMAS
const i18n = {
    es: {
        "welcome-msg": "¡Hola! Estamos felices de que estés aquí.",
        "btn-search": "Descubrir mi invitación",
        "story-text": "Nuestra historia no se entiende sin un mapa, un idioma compartido y aquel Erasmus en Urbino. Queremos celebrar que, después de tantos viajes y kilómetros, nuestro destino favorito sigue siendo estar juntos. ¡Gracias por acompañarnos!",
        "rsvp-reserva": "¡Hola {name}! Hemos reservado {n} puesto(s) para ti.",
        "label-attendance": "¿Vienes?",
        "opt-yes": "¡Allí estaré!",
        "opt-no": "No puedo, me lo pierdo",
        "label-bus": "¿Necesitarás plaza en el autobús?",
        "label-hotel": "¿Queréis que contactemos con el hotel por vosotros?",
        "label-allergies": "¿Tienes alguna alergia o restricción alimentaria?",
        "label-song": "Esa canción que no puede faltar:",
        "btn-submit": "Confirmar",
        "location-title": "Naturaleza en estado puro",
        "location-text": "Nos casamos en Casa Catani, Barisano. Queremos disfrutar del aire libre y la buena compañía.",
        "travel-title": "Consejos para el viaje",
        "travel-text": "Aeropuerto de Boloña (BLQ). El Marconi Express os lleva a la estación central. Trenes a Forlì cada 30 min.",
        "dress-title": "Dress Code",
        "dress-text": "Elegante y cómodo. Estaremos en el césped, elige bien tu calzado.",
        "gift-title": "Un detalle para nosotros",
        "gift-text": "Vuestra presencia es el mejor regalo. Si deseáis hacernos un detalle:",
        "thanks-text": "Gracias por formar parte del viaje.",
        "error-msg": "No encontramos ese nombre. Revisa si está bien escrito.",
        "guestInput": "Introduce tu nombre y apellidos",
        "extra-guest-title": "Acompañante {i}",
        "extra-name": "Nombre completo:",
        "extra-allergies": "Alergias o restricciones:",
        "extra-bus": "¿Necesitará autobús?",
        "extra-hotel": "¿Necesitará hotel?",
        "select-no": "No",
        "select-yes": "Sí"
    },
    it: {
        "welcome-msg": "Ciao! Siamo felici che tu sia qui.",
        "btn-search": "Scopri il mio invito",
        "story-text": "La nostra historia non si capisce senza una mappa, una lingua condivisa e quell'Erasmus a Urbino. Vogliamo festeggiare che la nostra destinazione preferita rimane stare insieme.",
        "rsvp-reserva": "Ciao {name}! Abbiamo riservato {n} posto/i per te.",
        "label-attendance": "Ci sarai?",
        "opt-yes": "Ci sarò!",
        "opt-no": "Non posso, mi dispiace",
        "label-bus": "Avrete bisogno del pullman?",
        "label-hotel": "Volete che contattiamo l'hotel per voi?",
        "label-allergies": "Hai qualche allergia o restrizione?",
        "label-song": "Quella canzone che non può mancare:",
        "btn-submit": "Conferma",
        "location-title": "Natura allo stato puro",
        "location-text": "Ci sposiamo a Casa Catani, Barisano. Vogliamo godere dell'aria aperta e della buona compagnia.",
        "travel-title": "Consigli per il viaggio",
        "travel-text": "Aeroporto di Bologna (BLQ). Marconi Express fino alla stazione. Treni per Forlì ogni 30 min.",
        "dress-title": "Dress Code",
        "dress-text": "Elegante e comodo. Saremo sul prato, scegli bene le scarpe.",
        "gift-title": "Un pensiero per noi",
        "gift-text": "La vostra presenza è il regalo più grande. Se volete farci un pensiero:",
        "thanks-text": "Grazie per far parte del viaggio.",
        "error-msg": "Nome non trovato. Controlla se è scritto correttamente.",
        "guestInput": "Inserisci il tuo nome e cognome",
        "extra-guest-title": "Accompagnatore {i}",
        "extra-name": "Nome completo:",
        "extra-allergies": "Allergie o restrizioni:",
        "extra-bus": "Avrà bisogno del pullman?",
        "extra-hotel": "Avrà bisogno dell'hotel?",
        "select-no": "No",
        "select-yes": "Sì"
    }
};

let currentLang = 'es';
let invitadoActual = null;
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyWh6uPbRwzHgW66AUbvat52McQmCG17BTwD1LwfRE1Fb_b0dBZ4UrB3waNp7x5731p/exec"; 

function setLanguage(lang) {
    currentLang = lang;
    const t = i18n[lang];
    for (let key in t) {
        let el = document.getElementById(key);
        if (el) {
            if (el.id === 'guestInput') el.placeholder = t[key];
            else el.innerText = t[key];
        }
    }
    if (invitadoActual) actualizarMensajeReserva();
}

function validateGuest() {
    const input = document.getElementById('guestInput').value.toLowerCase().trim();
    const guest = invitados.find(i => i.nombre.toLowerCase() === input);

    if (guest) {
        invitadoActual = guest;
        document.body.style.backgroundImage = "url('https://res.cloudinary.com/dhryyhnig/image/upload/v1770844759/fondo2_nufgwk.png')"; 
        document.getElementById('access-section').style.display = 'none';
        document.getElementById('hero-photo').style.display = 'none'; 
        document.getElementById('main-content').style.display = 'block';
        document.getElementById('rsvp-greeting').style.display = 'block'; 
        setLanguage(guest.idioma);
        toggleGuestFields(); 
    } else {
        const errorMsg = document.getElementById('error-msg');
        errorMsg.innerText = i18n[currentLang]["error-msg"];
        errorMsg.style.display = 'block';
    }
}

function toggleGuestFields() {
    const container = document.getElementById('guests-container');
    const attendance = document.getElementById('main-attendance').value;
    const t = i18n[currentLang];
    container.innerHTML = ''; 

    if (attendance === 'si' && invitadoActual.puestos > 1) {
        for (let i = 1; i < invitadoActual.puestos; i++) {
            const guestDiv = document.createElement('div');
            guestDiv.className = 'guest-extra-fields';
            guestDiv.innerHTML = `
                <div style="margin: 30px 0; border-top: 1px dashed var(--naranja); padding-top: 20px;">
                    <p style="font-family: 'Playwrite CU'; color: var(--naranja); margin: 0;">${t["extra-guest-title"].replace('{i}', i)}</p>
                    <div class="form-group">
                        <label>${t["extra-name"]}</label>
                        <input type="text" name="guest_name_${i}" required>
                    </div>
                    <div class="form-group">
                        <label>${t["extra-allergies"]}</label>
                        <textarea name="guest_allergies_${i}" rows="2"></textarea>
                    </div>
                    <div class="form-group">
                        <label>${t["extra-bus"]}</label>
                        <select name="guest_bus_${i}" required>
                            <option value="no">${t["select-no"]}</option>
                            <option value="si">${t["select-yes"]}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>${t["extra-hotel"]}</label>
                        <select name="guest_hotel_${i}" required>
                            <option value="no">${t["select-no"]}</option>
                            <option value="si">${t["select-yes"]}</option>
                        </select>
                    </div>
                </div>
            `;
            container.appendChild(guestDiv);
        }
    }
}

function actualizarMensajeReserva() {
    let msg = i18n[currentLang]["rsvp-reserva"];
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

document.getElementById('rsvp-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = document.getElementById('btn-submit');
    const originalText = btn.innerText;
    btn.innerText = "Enviando...";
    btn.disabled = true;

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.nombre_principal = invitadoActual.nombre;

    fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(data)
    })
    .then(() => {
        alert(currentLang === 'es' ? "¡Datos guardados! Gracias." : "Dati salvati! Grazie.");
        btn.innerText = "Confirmado";
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Error al enviar. Inténtalo de nuevo.");
        btn.innerText = originalText;
        btn.disabled = false;
    });
});

updateCountdown();