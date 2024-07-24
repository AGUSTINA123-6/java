/*
 
   seTimeout    --> Ejecuta la función una sola vez
   setInterval  --> Ejecuta la función varias veces

*/

function Perdiste() {
	document.write("<h1 style='color:blue'> GAME OVER </h1>");
}

function Ganaste() {
	window.open("ganaste.html");
}


var c = 0; // 0--> no hay carrera   1--> sí hay carrera
var x = 0;
var intervalId; // Variable para almacenar el ID del intervalo
var puntos = 0; // Contador de puntos

function StartCrono() {
    x = x + 1;
    document.getElementById("crono").innerHTML = "Tiempo: " + x;
    c = 1;
    
    // Establecer el intervalo para preguntar cada 3 segundos
    intervalId = setInterval(function() {
        var pregunta = prompt("¿Cuánto es dos más dos?");
        if (pregunta !== "4") {
            alert("Respuesta incorrecta. Intenta de nuevo.");
        } else {
            alert("¡Respuesta correcta!");
            puntos++; // Sumar un punto por respuesta correcta
            clearInterval(intervalId); // Limpiar el intervalo al responder correctamente
        }
    }, 3000); // 3000 milisegundos = 3 segundos
}

// Función para mostrar los puntos al final del juego
function MostrarResultado() {
    clearInterval(intervalId); // Asegurarse de detener cualquier intervalo activo
    alert("Juego terminado. Has obtenido " + puntos + " puntos.");
}


