//FUNCIONES EXPRESADAS

//TODAS FUNCIONES EXPRESADAS SE ASIGNAN COMO VALOR DE UNA VARIABLE, SE LES CONOCE COMO FUNCIONES ANONIMAS, EL NOMBRE LO LLEVA LA VARIABLE Y NO LA FUNCION.

console.log(saludo());


function saludo (){
    return "Hola";
}

//fn expresada - es una funcion q se asigna como valor de una variable
const despedida = function (language){
    let mensajeDespedida;
    switch (language) {
        case "es":
            mensajeDespedida = "Adios";
            break;
        case "en":
            mensajeDespedida = "Goodbye!";
            break;
        case "euskera":
            mensajeDespedida = "Agur!";
            break;
        default:
            mensajeDespedida = "tienes que elegir el lenguaje";
    }
    return mensajeDespedida;

}
console.log(despedida("es"));
console.log(despedida("en"));
console.log(despedida("euskera"));


//LA MAYOR DIFERENCIA ESTA EN EL HOISTING. Las funciones expresadas no se pueden invocar antes de ser creadas, a diferencia de las funciones declaradas