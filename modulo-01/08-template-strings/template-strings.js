//TEMPLATE STRINGS - TEMPLATE LITERALS 

let nombre = "Maria";
let apellido = "Perez";
let edad = 22;
let intereses = "trabajar con JavaScript, HTML y CSS";

let nombreCompleto = nombre + " "+ apellido;

console.log(nombreCompleto);

//let saludo = "Hola, mi nombre es " + nombreCompleto + ",tengo " + edad + " y me gusta " + intereses;

let saludo = `Hola, mi nombre es ${nombreCompleto}, tengo ${Math.random()} años y me gusta ${intereses}`;
console.log(saludo);