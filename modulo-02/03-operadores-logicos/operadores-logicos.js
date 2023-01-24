//OPERADORES LOGICOS - comparar y unir sentencias logicas

/* voy al parque?
clima => soleado
dia => viernes o sabado
horario => antes de las 6pm
*/

let clima = "soleado";
let dia = "sabado";
let horario = 2;

//AND && -- tiene en cuenta todas las sentencias
console.log(clima === "soleado" && dia === "viernes" && horario < 6); // false

//OR || -- debe cumplir alguna de las sentencias
console.log(dia === "viernes" || dia ==="sabado"); // true


// Negacion - NO - !
let estamosAprendiendo = true;
console.log(estamosAprendiendo); // true
console.log(!estamosAprendiendo); //false - NO estamosAprendiendo

let noSoyEspaniola = false;
console.log(noSoyEspaniola); // false
console.log(!noSoyEspaniola); // true
