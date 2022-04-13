"use strict"

// alert("Test de Geografía. Responda con una sola palabra")

let preguntas = ["¿Cuál es la capital de Suecia?", "¿En qué país se encuentra el rio Rhin?", "¿Cuál es el monte mas alto de Sudamerica?",
    "¿Qué pais es el principal productor de caucho?", "¿Cuántos paises tiene Latinoamerica?", "¿En qué pais se encuentra Séul?",
]
let solucion = ["estocolmo", "alemania", "aconcagua", `brasil`, "20", "corea del sur"]
let respuestas = [];
let correctas = 0;
let incorrectas = 0;

for (let i = 0; i < preguntas.length; i++) {
    let div = document.createElement("div")
    let input = document.createElement("input")
    let padre = document.querySelector(".hoja")
    div.innerText = `${[i + 1]}-   ${preguntas[i]}`;
    div.setAttribute("class", "uno")
    input.setAttribute("class", "rtas")
    input.setAttribute("id", "valores")
    padre.appendChild(div)
    div.appendChild(input)
};


let aprobado = function (a, b) {
    if (a > b && a == preguntas.length) {
        document.querySelector('.resultado').textContent = (`😎 ${a}/${a + b}`);
    } if (a > b && a !== preguntas.length) {
        document.querySelector(".resultado").textContent = (`😀 ${a}/${a + b}`);
    } if (a == b) {
        document.querySelector(".resultado").textContent = (`🙄${a}/${a + b}`);
    } if (a < b) {
        document.querySelector(".resultado").textContent = (`😒${a}/${a + b}`);
    } if (a === 0) {
        document.querySelector(".resultado").textContent = (`🤐 ${a}/${a + b}`);
    }

};


document.getElementById("btn").addEventListener("click", () => {

    let padreQuiz = document.createElement("div")
    padreQuiz.setAttribute("class", "padreSoluciones")
    document.querySelector(".hoja").appendChild(padreQuiz);

    for (let y = 0; y < preguntas.length; y++) {
        let rtas = document.getElementsByClassName("rtas")[y].value
        respuestas.push(rtas);
    }

    for (let y = 0; y < respuestas.length; y++) {
        if (respuestas[y].toLowerCase() == solucion[y]) {
            correctas++;
            document.getElementsByClassName("rtas")[y].classList.add("verde")

        } else {
            incorrectas++;
            let soluciones = document.createElement("h2");
            soluciones.textContent = "Solución : ";
            let quiz = document.createElement("p");
            quiz.setAttribute("class", "soluciones")
            quiz.textContent = `${[y + 1]} )   ${solucion[y]};`;
            padreQuiz.appendChild(quiz, soluciones);
            document.getElementsByClassName("rtas")[y].classList.add("rojo")
        };


        if (respuestas.includes("brazil")) {
            correctas++;
            incorrectas--;
        };

    }

    Toastify({
        text: "Repetir",
        duration: 10000,
        destination: "./index.html",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();

    aprobado(correctas, incorrectas)
    document.querySelector(".boton").classList.add("hidden");
    document.querySelector(".subtitulo").textContent = " ";
    console.log(respuestas, correctas, incorrectas);
});








// aprobado(correctas, incorrectas)
// document.querySelector(".descripcion").textContent = (`Test finalizado con ${correctas} respuestas correctas y ${incorrectas} incorrectas`);
// console.log(respuestas);


