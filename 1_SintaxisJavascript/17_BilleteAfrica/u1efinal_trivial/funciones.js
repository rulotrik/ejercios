/* Vectores de las preguntas*/
var geografia = ["¿Cuál es el continente más poblado?", false, 0]; //Asia
var arte = ["¿Cómo es el nombre completo de Salvador Dalí?", false, 0]; //Salvador Felipe Jacinto Dalí
var espectaculo = ["¿Qué megafilme ha obtenido la mayor cantidad de candidaturas en una misma edición de los premios Oscar?", false, 0]; //Titanic
var historia = ["¿Cuál era la base de la economía del antigua egípcio?", false, 0]; //Agricultura
var deporte = ["¿Cómo es apodado Muhammad Ali?", false, 0]; // El mas grande
var ciencia = ["¿Cuantos son los planetas del sistema solar?", false, 0]; //9

var preguntadas = []; //Variable que almacena que numero del dado a salido
var nLanzamientos = 0; //Variable que controla el numero de lanzamientos del dado

/** Funcion que se ejecuta nada mas empezar la pagina, Basicamente pregunta por el nombre del participante */
function trivial() {
    'use strict';
    alert("BIENVENIDO AL TRIVIAL");
    var person = prompt("Introduce tu nombre");

    alert("Que empieze el juego " + person);
}

/** Funcion que simula el lanzamiento de un dado, comprueba si ese numero aleatorio no se repite y de ser asi formula la pregunta */
function random() {
    if (nLanzamientos < 6){
        do {
            var r = Math.floor((Math.random() * 6) + 1);
            var randomRepetido = comprobacionRandom(r);

        } while(randomRepetido == true);

        nLanzamientos++;
        preguntadas.push(r);
        asignacionPreguntas(r);

    } else{
        document.getElementById('btn1').disabled = true;
    }
}

/**
 * Funcion que segun que numero nos pasen preguntara una o otra pregunta y hara la comprobación de si es correcta o no. Despues realizara la suma al marcador
 * @random
 */
function asignacionPreguntas(random) {
    var random = random;

    if (random==1){
        var respuesta = prompt(geografia[0]);
        if (respuesta.toLowerCase() == "asia"){
            geografia[1] = true;
            geografia[2] = 1;
            alert("Respuesta acertada.");

        }else{
            alert("Respuesta incorrecta.");
            geografia[2] = 2;
        }
    }
    else if (random==2){
        var respuesta = prompt(arte[0]);
        if (respuesta.toLowerCase() == "salvador felipe jacinto dalí"){
            arte[1] = true;
            arte[2] = 1;
            alert("Respuesta acertada.");

        }else{
            alert("Respuesta incorrecta.");
            arte[2] = 2;
        }
    }
    else if (random==3){
        var respuesta = prompt(espectaculo[0]);
        if (respuesta.toLowerCase() == "titanic"){
            espectaculo[1] = true;
            espectaculo[2] = 1;
            alert("Respuesta acertada.");

        }else{
            alert("Respuesta incorrecta.");
            espectaculo[2] = 2;
        }
    }
    else if (random==4){
        var respuesta = prompt(historia[0]);
        if (respuesta.toLowerCase() == "agricultura"){
            historia[1] = true;
            historia[2] = 1;
            alert("Respuesta acertada.");

        }else{
            alert("Respuesta incorrecta.");
            historia[2] = 2;
        }
    }
    else if (random==5){
        var respuesta = prompt(deporte[0]);
        if (respuesta.toLowerCase() == "el mas grande"){
            deporte[1] = true;
            deporte[2] = 1;
            alert("Respuesta acertada.");

        }else{
            alert("Respuesta incorrecta.");
            deporte[2] = 2;
        }
    }
    else if (random==6){
        var respuesta = prompt(ciencia[0]);
        if (respuesta == 9){
            ciencia[1] = true;
            ciencia[2] = 1;
            alert("Respuesta acertada.");

        }else{
            alert("Respuesta incorrecta.");
            ciencia[2] = 2;
        }
    }
}

/**
 * Funcion que comprueba si ese numero que la funcion de random nos devuelve es repetido o no
 * @random
 */
function comprobacionRandom(random) {
    for (var i = 0; i < preguntadas.length; i++) {

        if (random == preguntadas[i]) {
            return true;
        }
    }
    return false;
}

/* Funcion que al pulsar en el boton de resultado muestra el progreso de la partida */
function resultado(){

    var acertadas = 0;
    var falladas = 0;
    var porResponder = 0;

    if(geografia[1]==true && geografia[2]==1){
        acertadas++;
    } else if(geografia[1]==false && geografia[2]==2){
        falladas++;
    } else if (geografia[2]==0){
        porResponder++;
    }

    if(arte[1]==true && arte[2]==1){
        acertadas++;
    } else if(arte[1]==false && arte[2]==2){
        falladas++;
    } else if (arte[2]==0){
        porResponder++;
    }

    if(espectaculo[1]==true && espectaculo[2]==1){
        acertadas++;
    } else if(espectaculo[1]==false && espectaculo[2]==2){
        falladas++;
    } else if (espectaculo[2]==0){
        porResponder++;
    }

    if(historia[1]==true && historia[2]==1){
        acertadas++;
    } else if(historia[1]==false && historia[2]==2){
        falladas++;
    } else if (historia[2]==0){
        porResponder++;
    }

    if(deporte[1]==true && deporte[2]==1){
        acertadas++;
    } else if(deporte[1]==false && deporte[2]==2){
        falladas++;
    } else if (deporte[2]==0){
        porResponder++;
    }

    if(ciencia[1]==true && ciencia[2]==1){
        acertadas++;
    } else if(ciencia[1]==false && ciencia[2]==2){
        falladas++;
    } else if (ciencia[2]==0){
        porResponder++;
    }

    alert("Acertadas: " + acertadas +
          " - Falladas: " + falladas +
          " - Por Responder: " + porResponder);
}