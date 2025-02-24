function adivinar() {
    return Math.floor(Math.random() * 4) + 3; 
}

var usuario = parseInt(prompt("Adivine el número que está pensando la computadora (Debe estar entre 3 y 6)"), 10);

if (usuario >= 3 && usuario <= 6) { 
    var numeroComputadora = adivinar();
    alert("La computadora eligió: " + numeroComputadora + "\nUsted eligió: " + usuario);

    if (usuario === numeroComputadora) {
        alert("¡Felicidades! Adivinaste el número.");
    } else {
        alert("Lo siento, no acertaste. Inténtalo de nuevo.");
    }
} else {
    alert("Número fuera del rango. Debe ser entre 3 y 6.");
}
  