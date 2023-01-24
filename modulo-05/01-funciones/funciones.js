//FUNCIONES

//1. Crear la funcion - definimos la logica interna de la funcion. (Declaracion de una funcion)

function saludar (){
    //cuerpo de la funcion
    return "Hola, que tal?"
};

//2. Ejecutar la funcion (Invocacion de una funcion). Ponemos la funcion en funcionamiento.

//al guardar lo que la funcion retorno en una variable, podemos manipularlo e imprimirlo en pantalla
const mensajeDeSaludo = saludar();

console.log(mensajeDeSaludo);

//funciones con inputs - para funciones dinamicas

function saludarVersion2(nombreDeLaPersona){
    let mensaje;
    if(nombreDeLaPersona === undefined){
        mensaje = `Hola persona desconocida`
    }else{
        mensaje =`Hola, ${nombreDeLaPersona}`};
        return mensaje;
};

//const saludoUno = saludarVersion2("Meli");

//console.log(saludoUno);
console.log(saludarVersion2("Meli"));
const saludoDos = saludarVersion2();
console.log(saludoDos); // hola, undefined porque no tiene ningun argumento.