/* =========================================================
   EXPEDIENTE CONFIDENCIAL
   CASO: NOSOTROS ❤️
========================================================= */


/* =========================================================
   VARIABLES
========================================================= */

let nombre = "";
let puntos = 0;

let preguntaActual = 0;

const preguntas = [

    {
        pregunta:
            "¿En qué mes aproximadamente comenzó todo por internet?",

        opciones: [
            "Octubre 2024",
            "Diciembre 2024",
            "Febrero 2025",
            "Abril 2025"
        ],

        correcta: 1,

        mensajeCorrecto:
            "Diciembre de 2024. Aquí empezó todo. ❤️",

        mensajeIncorrecto:
            "Era diciembre de 2024. Por poquito te nos vas al expediente equivocado JAJAJA."
    },

    {
        pregunta:
            "¿Qué pasó con tu moto en nuestra primera salida?",

        opciones: [
            "Se apagó aunque dijiste que nunca pasaba",
            "Se quedó sin gasolina",
            "Se ponchó",
            "Nunca llevaste moto"
        ],

        correcta: 0,

        mensajeCorrecto:
            "Exactamente. La moto decidió participar en nuestra historia. 😂",

        mensajeIncorrecto:
            "La respuesta era que se apagó aunque dijiste que nunca pasaba. JAJAJA."
    },

    {
        pregunta:
            "¿Quién suele decirte Tambor?",

        opciones: [
            "Tu mamá",
            "Yo",
            "Tu familia cuando me lo recuerda",
            "Todos los anteriores"
        ],

        correcta: 1,

        mensajeCorrecto:
            "Correcto. Porque claramente ese nombre ya es propiedad compartida. 🥁❤️",

        mensajeIncorrecto:
            "La respuesta era YO. Aunque tu mamá fue quien empezó con el apodo. 🥁"
    }

];


/* =========================================================
   CAMBIAR DE PANTALLA
========================================================= */

function cambiarPantalla(id) {

    document
        .querySelectorAll(".pantalla")
        .forEach(pantalla => {

            pantalla.classList.remove("activa");

        });

    const pantallaNueva = document.getElementById(id);

    pantallaNueva.classList.add("activa");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   INICIAR
========================================================= */

function comenzarExpediente() {

    cambiarPantalla("nombre");

}


/* =========================================================
   NOMBRE
========================================================= */

function guardarNombre() {

    const input =
        document.getElementById("nombreUsuario");

    nombre =
        input.value.trim();

    if (nombre === "") {

        alert("Necesito saber quién está intentando entrar 👀");

        return;
    }

    cambiarPantalla("seguridad");
}


/* =========================================================
   SEGURIDAD
========================================================= */

function verificarSeguridad() {

    const respuesta =
        document
        .getElementById("respuestaSeguridad")
        .value
        .trim()
        .toLowerCase();

    const resultado =
        document.getElementById("resultadoSeguridad");


    if (
        respuesta === "tambor" ||
        respuesta === "el tambor"
    ) {

        puntos += 5;

        resultado.innerHTML =
            "✅ IDENTIDAD CONFIRMADA.<br><br>" +
            "Sabía que eras tú, Tambor. 🥁❤️";

        setTimeout(() => {

            mostrarHistoria();

        }, 1500);

    } else {

        resultado.innerHTML =
            "❌ Respuesta sospechosa...<br><br>" +
            "Pero bueno, te vamos a dejar pasar. JAJAJA 🤨";

        setTimeout(() => {

            mostrarHistoria();

        }, 1800);
    }
}


/* =========================================================
   MOSTRAR HISTORIA
========================================================= */

function mostrarHistoria() {

    cambiarPantalla("contenido");

    const historia =
        document.getElementById("historia");

    historia.innerHTML = `

        <span class="numero">
            EXPEDIENTE #001
        </span>

        <div class="seccion-historia">

            <h2>📁 EL INICIO</h2>

            <p>
                <strong>Versión oficial:</strong>
                Nos conocimos en su escuela.
            </p>

            <div class="confidencial">

                <strong>🔒 INFORMACIÓN CONFIDENCIAL</strong>

                <p>
                    Nos conocimos por internet.
                </p>

                <p>
                    Lo que empezó como una conversación
                    terminó convirtiéndose en una historia
                    que todavía seguimos escribiendo.
                </p>

            </div>

        </div>


        <div id="pregunta1"></div>

    `;

    mostrarPregunta();
}


/* =========================================================
   PREGUNTAS
========================================================= */

function mostrarPregunta() {

    const pregunta =
        preguntas[preguntaActual];

    const contenedor =
        document.getElementById(
            "pregunta" + (preguntaActual + 1)
        ) || document.getElementById("pregunta1");

    contenedor.innerHTML = `

        <div class="seccion-historia">

            <h2>🧠 PRUEBA DE MEMORIA #${preguntaActual + 1}</h2>

            <p>
                <strong>
                    ${pregunta.pregunta}
                </strong>
            </p>

            <div class="opciones">

                ${pregunta.opciones.map(
                    (opcion, indice) => `

                    <div
                        class="opcion"
                        onclick="responderPregunta(${indice})"
                    >
                        ${indice + 1}. ${opcion}
                    </div>

                `).join("")}

            </div>

            <div id="mensajePregunta"></div>

        </div>
    `;
}


/* =========================================================
   RESPONDER
========================================================= */

function responderPregunta(indice) {

    const pregunta =
        preguntas[preguntaActual];

    const opciones =
        document.querySelectorAll(".opcion");

    opciones.forEach(opcion => {

        opcion.style.pointerEvents = "none";

    });


    const mensaje =
        document.getElementById(
            "mensajePregunta"
        );


    if (indice === pregunta.correcta) {

        puntos += 10;

        opciones[indice]
            .classList.add("correcta");

        mensaje.innerHTML = `

            <div class="resultado">

                ✅ CORRECTO

                <br><br>

                ${pregunta.mensajeCorrecto}

            </div>
        `;

    } else {

        puntos -= 5;

        opciones[indice]
            .classList.add("incorrecta");

        opciones[pregunta.correcta]
            .classList.add("correcta");

        mensaje.innerHTML = `

            <div class="resultado">

                ❌ INCORRECTO

                <br><br>

                ${pregunta.mensajeIncorrecto}

            </div>
        `;
    }


    setTimeout(() => {

        siguienteParte();

    }, 2200);
}


/* =========================================================
   SIGUIENTE PARTE DE LA HISTORIA
========================================================= */

function siguienteParte() {

    const historia =
        document.getElementById("historia");


    if (preguntaActual === 0) {

        historia.innerHTML += `

            <div class="seccion-historia">

                <h2>☕ PRIMER ENCUENTRO</h2>

                <p class="fecha">
                    04 DE FEBRERO DE 2025
                </p>

                <p>
                    Café.
                </p>

                <p>
                    Elote.
                </p>

                <p>
                    Mi casa.
                </p>

                <p>
                    Y probablemente ninguno de los dos
                    sabía todo lo que iba a pasar después.
                </p>

                <div class="broma">

                    🥁 Aquí también aparece oficialmente
                    el famoso apodo de <strong>Tambor</strong>.

                    <br><br>

                    Su mamá fue quien comenzó a decirte así
                    porque mueves la pierna cuando estás nervioso.

                </div>

            </div>

            <div id="pregunta2"></div>

        `;

        preguntaActual++;

        mostrarPregunta();

        return;
    }


    if (preguntaActual === 1) {

        historia.innerHTML += `

            <div class="seccion-historia">

                <h2>🏍️ ARCHIVO DEL INCIDENTE</h2>

                <p>
                    Nuestra primera salida también dejó
                    uno de los primeros momentos históricos
                    del expediente.
                </p>

                <div class="broma">

                    Tú dijiste que tu moto nunca se apagaba.

                    <br><br>

                    La moto:
                    <strong>
                        "¿Ah sí?"
                    </strong>

                    😂

                </div>

            </div>


            <div class="seccion-historia">

                <h2>❤️ EL DÍA OFICIAL</h2>

                <p class="fecha">
                    23 DE FEBRERO DE 2025
                </p>

                <p>
                    Ese día oficialmente nos convertimos
                    en novios.
                </p>

                <p>
                    Y sí, aquí fue cuando me diste flores.
                    🌷❤️
                </p>

                <div class="broma">

                    Dos gallos de pelea. 🐓🐓

                    <br>

                    Dos novios. ❤️

                    <br>

                    Dos criticones. 😂

                    <br>

                    Y probablemente dos personas
                    que hacen demasiado drama.

                </div>

            </div>


            <div class="seccion-historia">

                <h2>🥁 ARCHIVO ESPECIAL — TAMBOR</h2>

                <p>
                    Alias registrados:
                </p>

                <p>
                    🥁 Tambor
                    <br>
                    👴 Señor
                </p>

                <p>
                    Sí, señor.
                    Aunque seas un año menor que yo.
                    No pienso dejar de decirte así.
                    JAJAJA.
                </p>

            </div>

            <div id="pregunta3"></div>

        `;

        preguntaActual++;

        mostrarPregunta();

        return;
    }


    if (preguntaActual === 2) {

        mostrarIncidentes();

    }

}


/* =========================================================
   INCIDENTES
========================================================= */

function mostrarIncidentes() {

    const historia =
        document.getElementById("historia");


    historia.innerHTML += `

        <div class="seccion-historia">

            <h2>🚨 ARCHIVO DE INCIDENTES</h2>

            <div class="broma">

                <strong>INCIDENTE #001 🐰</strong>

                <p>
                    Ibas tranquilamente por la vida cuando
                    apareció una persona con disfraz de conejo
                    y, del susto, casi le pegas.
                </p>

                <p>
                    🐰💨
                </p>

            </div>


            <div class="broma">

                <strong>INCIDENTE #002 🚪</strong>

                <p>
                    Escape room.
                </p>

                <p>
                    Tú decidiste que, en caso de emergencia,
                    yo podía ser el sacrificio.
                </p>

                <p>
                    Muy romántico todo. 😂
                </p>

            </div>


            <div class="broma">

                <strong>INCIDENTE #003 🔑</strong>

                <p>
                    Una vez rompiste el seguro de mi casa.
                </p>

                <p>
                    Mi papá lo arregló ese mismo día.
                    JAJAJA.
                </p>

            </div>

        </div>


        <div class="seccion-historia">

            <h2>😂 ARCHIVO ESPECIAL — LA MOCOSA</h2>

            <p>
                Frases históricas registradas:
            </p>

            <div class="broma">
                "Pinche mocosa"
            </div>

            <div class="broma">
                "Fackiu"
            </div>

            <p>
                Frecuencia: pocas veces.
            </p>

            <p>
                Nivel de gracia: inexplicablemente alto.
            </p>

            <p>
                Y aun así...
                sigues aquí.
                ❤️
            </p>

        </div>


        <div class="seccion-historia">

            <h2>🌊 ARCHIVO FUTURO</h2>

            <p>
                Primer viaje a la playa juntos:
                <strong>COMPLETADO.</strong>
            </p>

            <div class="broma">

                🌴 PLAYA 2.0 🌴

                <br><br>

                Participantes:

                <br>

                🥁 Tambor
                <br>
                ❤️ Yo
                <br>
                👨 Papá
                <br>
                👦 Hermano

                <br><br>

                Estado:
                <strong>PRÓXIMAMENTE...</strong>

            </div>

        </div>


        <div class="seccion-historia">

            <h2>📊 ESTADÍSTICAS</h2>

            <p>
                <strong>
                    Inicio:
                </strong>
                23 de febrero de 2025
            </p>

            <p>
                <strong>
                    Aniversario:
                </strong>
                23 de septiembre de 2026
            </p>

            <p>
                <strong>
                    Tiempo juntos:
                </strong>
                577 días
            </p>

            <p>
                <strong>
                    Aproximadamente:
                </strong>
                1 año y 7 meses
            </p>

            <p>
                <strong>
                    Tonterías compartidas:
                </strong>
                demasiadas para contar.
            </p>

            <p>
                <strong>
                    Amor registrado:
                </strong>
                muchísimo. ❤️
            </p>

        </div>


        <div class="seccion-historia">

            <h2>🩺 DIAGNÓSTICO FINAL</h2>

            <div class="resultado">

                ${generarResultado()}

            </div>

        </div>


        <div class="seccion-historia">

            <h2>❤️ ANÁLISIS SENTIMENTAL</h2>

            <p>
                ¿Qué hizo que ella se enamorara de ti?
            </p>

            <p>
                No fue porque fueras perfecto.
            </p>

            <p>
                Fue porque nunca la hiciste sentir
                que tenía que cambiar.
            </p>

            <p>
                Viste su forma de ser...
                sus dramas...
                sus locuras...
                su cabello de león...
            </p>

            <p>
                Y en lugar de salir corriendo...
                decidiste seguirle el juego.
            </p>

            <p>
                Ella encontró a alguien con quien
                puede ser ella misma.
            </p>

        </div>


        <button onclick="mostrarCarta()">
            💌 CONTINUAR HASTA LA CARTA
        </button>

    `;

}


/* =========================================================
   RESULTADO
========================================================= */

function generarResultado() {

    if (puntos >= 25) {

        return `
            🏆<br><br>

            <strong>
                NOVIO CERTIFICADO
            </strong>

            <br><br>

            Has demostrado conocer bastante
            bien el expediente.
        `;

    }

    if (puntos >= 10) {

        return `
            🧐<br><br>

            <strong>
                NOVIO EN OBSERVACIÓN
            </strong>

            <br><br>

            Aceptable recordando que se te
            olvida casi todo.
        `;

    }

    return `
        🚨<br><br>

        <strong>
            NOVIO SOSPECHOSO
        </strong>

        <br><br>

        Sospechoso...
        pero todavía queremos que te quedes.
        😂❤️
    `;
}


/* =========================================================
   CARTA
========================================================= */

function mostrarCarta() {

    cambiarPantalla("carta");

}


/* =========================================================
   RESPUESTA DE LA CARTA
========================================================= */

function abrirSobre() {

    const respuesta =
        document
        .getElementById("respuestaCarta")
        .value
        .trim();


    if (respuesta === "") {

        alert(
            "Primero dime qué crees tú. 👀❤️"
        );

        return;
    }


    document
        .getElementById("escenaSobre")
        .classList.remove("oculto");

    document
        .getElementById("escenaSobre")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================================
   ABRIR CARTA
========================================================= */

function abrirCartaFinal() {

    const sobre =
        document.querySelector(".sobre");

    sobre.classList.add("abierto");


    setTimeout(() => {

        document
            .getElementById("cartaFinal")
            .classList.remove("oculto");

        document
            .getElementById("cartaFinal")
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 1300);


    lanzarCorazones(25);

}


/* =========================================================
   ANIMACIONES DEL FONDO
========================================================= */

const decoracion =
    document.getElementById("decoracion");


const elementos = [
    "❤️",
    "💕",
    "💗",
    "💖",
    "✨",
    "😂",
    "🤣",
    "🐰",
    "🐇",
    "🐓",
    "🥁",
    "💑",
    "🫶"
];


function crearFlotante() {

    const elemento =
        document.createElement("div");

    elemento.className =
        "flotante";

    elemento.textContent =
        elementos[
            Math.floor(
                Math.random() *
                elementos.length
            )
        ];

    elemento.style.left =
        Math.random() * 100 + "%";

    elemento.style.fontSize =
        (15 + Math.random() * 25) + "px";

    elemento.style.animationDuration =
        (6 + Math.random() * 6) + "s";

    elemento.style.animationDelay =
        (Math.random() * 2) + "s";


    decoracion.appendChild(elemento);


    setTimeout(() => {

        elemento.remove();

    }, 13000);
}


setInterval(
    crearFlotante,
    650
);


/* =========================================================
   EXPLOSIÓN DE CORAZONES
========================================================= */

function lanzarCorazones(cantidad) {

    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        setTimeout(() => {

            const corazon =
                document.createElement("div");

            corazon.className =
                "flotante";

            corazon.textContent =
                ["❤️", "💗", "💕", "💖", "✨"]
                [
                    Math.floor(
                        Math.random() * 5
                    )
                ];

            corazon.style.left =
                (35 + Math.random() * 30) + "%";

            corazon.style.bottom =
                "25%";

            corazon.style.fontSize =
                (18 + Math.random() * 30) + "px";

            decoracion.appendChild(corazon);


            setTimeout(() => {

                corazon.remove();

            }, 10000);

        }, i * 80);

    }

}


/* =========================================================
   FINAL
========================================================= */

function mostrarCreditos() {

    document
        .querySelectorAll(".pantalla")
        .forEach(p => {

            p.classList.remove("activa");

        });

    document
        .getElementById("creditos")
        .classList.add("activa");

}


/* =========================================================
   MOSTRAR CRÉDITOS AL TERMINAR CARTA
========================================================= */

document.addEventListener(
    "scroll",
    function() {

        const carta =
            document.getElementById("cartaFinal");

        if (!carta) return;

        if (
            !carta.classList.contains("oculto")
        ) {

            const rect =
                carta.getBoundingClientRect();

            if (
                rect.bottom < window.innerHeight
            ) {

                if (
                    !window.creditosMostrados
                ) {

                    window.creditosMostrados =
                        true;

                    setTimeout(
                        mostrarCreditos,
                        2500
                    );
                }
            }
        }

    }
);