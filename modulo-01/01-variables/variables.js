//VARIABLES 

//VAR
//siempre es ambito global, aun cuando se mete en un bloque {}
//var ya NO se usa a la hora de declarar variables

var nombre = "Meli";

{
    var nombre = "Pedro"; 
}

console.log(nombre);

//LET

//declaro variable
let apellido = "Bassano";
//responde al scope, lo que va en bloques no pisa lo de fuera, en el scope global
//puedo reutilizar la variable y asignarle otro valor

//asigno valor
apellido = "Sanchez";

{
    let apellido = "Perez";
    apellido = "Gomez";
    console.log(apellido);
}

console.log(apellido);

//CONST

const edad = 35;
// const tambnien permite scope local y global, puede usarse solo UNA vez en su scope
{
    const edad = 12;
    console.log(edad);
}

console.log(edad);