// metodos de strings
let nombreCompleto = "Lola Gomez";

// startsWith - empieza con

console.log(nombreCompleto.startsWith("a"));//false
console.log(nombreCompleto.startsWith("l")); // false, empieza con MAYUS
console.log(nombreCompleto.startsWith("L"));

//trim - podar, eliminar espacios antes y despues de un string, no entre medio.
let miMascota = "       archivaldo       ";
let miMascotaSinEspacios = miMascota.trim();
console.log(miMascota.length);
console.log(miMascotaSinEspacios.length); 
console.log(miMascotaSinEspacios); // archivaldo

//repeat - repetir

let nana = "Na na";
//le indico las veces que quiero que se repita
console.log(nana.repeat(5));
console.log("Batmaaan");

//replace - reemplazar
let nombreErrado = "Huam Perez";
console.log(nombreErrado.replace("Huam", "Juan")); // en el primer parametro incico lo q quiero reemplazar, y en el segundo parametro lo que quiero poner en su lugar
console.log(nombreErrado.replace("e","O"));

//replaceAll - reemplazar todo lo que matchea, no solo lo primero que encuentre
console.log(nombreErrado.replaceAll("e","u"));