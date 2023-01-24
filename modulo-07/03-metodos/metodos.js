//METODOS DE OBJETOS

const marieSmithers = {
    nombre : "Marie Smithers",
    edad: 27,
    email: "marie@email.com",
    ubicacion: {
        pais: "Mexico",
        ciudad: "CDMX"
    },
    estaCasada: false,
    mascotas: ["Lucas", "Paco", "Pepe"],
    saludar: function () {
        return `Hola, como estas?`;
    } ,
    obtenerNombreEdad: function () {
        return `${this.nombre} - ${this.edad}`},
    decirNombre: function (){
        return `Hola, mi nombre es ${this.nombre}`; // no se usa =>, 
    },
    obtenerMascota: function (indice) {
        if (indice < this.mascotas.length){
            return `${this.mascotas[indice]}`
        }
        else{
            return `Error, no existen mascotas en ese indice. Intenta con un numero menor a ${this.mascotas.length}`
        }
    },
};

console.log(marieSmithers.saludar());
console.log(marieSmithers.decirNombre());
console.log(marieSmithers.obtenerNombreEdad());
console.log(marieSmithers.obtenerMascota(0));
console.log(marieSmithers.obtenerMascota(1));
console.log(marieSmithers.obtenerMascota(2));
console.log(marieSmithers.obtenerMascota(3));