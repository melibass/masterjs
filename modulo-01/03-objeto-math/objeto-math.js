//OBJETO MATH

//funcionalidad nativa de JS, permite trabajar con numeros

//genera numero aleatorio entre 0 y 1
let numeroRandom = Math.random();
console.log(numeroRandom);

let precioBoletoDelTren =3.75;
//redondeo al numero siguiente, para arriba o abajo el numero decimal
let precioBoletoTrenRedondo = Math.round(precioBoletoDelTren);

console.log(precioBoletoTrenRedondo);
/*
console.log(Math.round(6.3)); // para abajo
console.log(Math.round(6.4)); // para abajo
console.log(Math.round(6.5)); // para arriba
console.log(Math.round(6.6)); // para arriba
 */

// a max se le pueden pasar varios valores y devuelve el numero mas alto
// console.log(Math.max(2,4,56,31,65597)); // 65597
// minimo valor
//console.log(Math.min(1,6,-5,0.50)); // -5

//calculo de potencia - debo indicar el numero y la potencia a la qlo quiero calcular

console.log(Math.pow(3,3)) 