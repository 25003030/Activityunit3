 var respuesta =  window.prompt ("Hola, ¿Quieres saber cuál es tu signo zodiacal?");
           
       if(respuesta === "Si" || respuesta === ""){
              
     var  dia = parseInt(prompt("Escribe el número del día de tu nacimiento"), 10);
     var  mes = parseInt(prompt("Escribe el número del mes de tu acimiento"),10); 
              
          if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 20 )) {
        alert("Tu signo zodiacal es ARIES");
    } else {
        alert("Tu signo zodiacal es TAURO");
    }
} else {
    alert ("No se puede saber tu signo zodiacal.");
}