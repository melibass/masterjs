//INTRODUCCION A ARRAYS - colecciones de datos de cualquier tipo
// indices desde 0
//longitud desde 1

const mascotas = ["Gina", "Lola", "Pitagoras", "Luz", "Molly", "Sopa"];

console.log(mascotas);

//acceder a un elemento de array

console.log(mascotas[2]);

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(meses[9]);
//acceder a todos los elementos de un array:
for (let i=0; i<meses.length; i++){
    const mes = meses[i];
    console.log(`El mes: ${mes} esta en el indice ${i}`);
}

//FOR OF

//debo decirle q variable representa a cada elemento del array y el array de donde quiero tomar estos elementos
for (let mes of meses){
    console.log(`El mes: ${mes} `);
}

for (let mascota of mascotas) {
    console.log(`Tengo una mascota que se llama ${mascota}`)
}