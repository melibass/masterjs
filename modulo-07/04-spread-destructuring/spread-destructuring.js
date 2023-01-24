//SPREAD OPERATOR Y DESTRUCTURING

const celularUno = {
    marca: "Samsung",
    modelo: "S22",
    precio: 345,
};

//SPREAD OPERATOR SE PONE CON  ... Y SIRVE PARA "CLONAR" UNA VARIABLE Y ASI TRABAJAR CON ELLA SIN MODIFICAR LA ORIGINAL.
const celularDos = {...celularUno};

celularDos.precio = 578;
celularDos.modelo = "A55";
celularDos.colores = ["Rojo", "Negro"]

console.log(celularUno);
console.log(celularDos);

//Destructuring - capacidad de desestructurar sin modificacion

// const modelo = celularDos.modelo; 
/*
const { modelo , precio: price } = celularDos;
console.log(price); // le puedo poner otro  nombre a la variable, en este caso "price" y alojar en ella una key del objeto a traves de :
*/
const { modelo , precio } = celularDos; // de la variable, le pido una constante sobre alguna de sus propiedades.
console.log(modelo);
console.log(precio);

const mascotasJavi = ["Puchi", "Koen"];
const mascotasCaro = [...mascotasJavi];

mascotasCaro.push("Muñeca");

console.log(mascotasCaro);
console.log(mascotasJavi);

const [mascotaUno, mascotaDos, mascotaTres] = mascotasCaro;
// para utilizar uno solo se podria jacer lo siguiente:
//const [, , mascotaTres] = mascotasCaro;
// = a const mascotaTres = mascotasCaro[2];

console.log(mascotaTres);