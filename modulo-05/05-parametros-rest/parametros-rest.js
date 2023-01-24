//PARAMETROS REST

// parametros rest ! a parametros default

const sumar = (n1,n2,...params) =>{
    console.log(params) // listado de parametros que agregamos, se muestran como array []
    return n1+n2;
}

console.log(sumar(34,67,5,4,3,2));

const datosPersonales = (nombre, dni, ...datos) =>{
    console.log(datos)
    return `Nombre: ${nombre} / DNI: ${dni}`;
}

console.log(datosPersonales("Meli", "35.123.406", 32, "Argentina", 1.57));