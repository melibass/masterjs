//ARROW FUNCTIONS

//son siempre funciones expresadas y no necesita la palabra reservada function.

const sumar = (n1, n2) => {
    return n1 + n2;
};

console.log(sumar(10,20));

//las Arrow que solo tienen un parametro, no es necesario envolverlo en parentesis.
const multiplicarPor5 = numero => {
    return numero*5;
};

console.log(multiplicarPor5(5));

//puede tener un retorno implicito, al solo hacer un return, podemos escribirla en UNA SOLA LINEA.

const dividirEntre2 = numero => numero / 2;

console.log(dividirEntre2(4));

//TODAS FUNCIONES EXPRESADAS SE ASIGNAN COMO VALOR DE UNA VARIABLE, SE LES CONOCE COMO FUNCIONES ANONIMAS, EL NOMBRE LO LLEVA LA VARIABLE Y NO LA FUNCION.