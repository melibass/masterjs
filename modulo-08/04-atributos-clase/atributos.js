//ATRIBUTOS DE UNA CLASE
class Persona {
    //pueden ser atributos privados.
    #nombre; // atributo privado, con el signo numeral.
    // Constructor - metodo, se ejecuta cuando hacemos una instancia automaticamente, construye la instancia del objeto
    constructor(nombre, apellido, edad){
       //Atributos - algo propio de la clase a lo q yo luego le asigno un valor.
       this.#nombre = nombre; // si el atributo es privado, hay q ponerle el signo numeral aca tmb
       this.apellido = apellido;
       this.edad = edad
    };
    
    //Metodos
};

class Mascota {
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    };
}

const johnDoe = new Persona("John"); // objeto
const marieSmithers = new Persona("Marie");

console.log(johnDoe);
console.log(johnDoe.nombre);
console.log(marieSmithers);
console.log(marieSmithers.nombre);

const puchi = new Mascota("Puchi", "Perro");

console.log(puchi);