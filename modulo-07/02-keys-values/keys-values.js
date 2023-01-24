//OBJETOS - KEYS & VALUES

const marieSmithers = {
    nombre : "Marie Smithers",
    edad: 27,
    email: "marie@email.com",
    ubicacion: {
        pais: "Mexico",
        ciudad: "CDMX"
    },
    estaCasada: false,
    //ciudad_nacimiento: ""
    //"ciudad nacimiento": -- nombre de key con espacios necesita "".
    //mascotas: null
};

const johnDoe = {
    email: "john@email.com",
    edad: 32,
    ubicacion: {
        pais: "Colombia",
        ciudad: "Bogotá"
    },
    nombre: "John Doe",
    mascotas: ["Puchi", "Michi"]

}

//acceder a un valor dentro de un objeto

console.log(marieSmithers.nombre);
console.log(marieSmithers.edad);
console.log(marieSmithers["email"]); // no se usa mucho.
console.log(marieSmithers.ubicacion);
console.log(marieSmithers.ubicacion.pais);
console.log(marieSmithers.mascotas);
console.log(johnDoe.mascotas);
console.log(johnDoe.mascotas[0]);