//METODO CONSTRUCTOR

class Persona {
    // Constructor - metodo, se ejecuta cuando hacemos una instancia automaticamente, construye la instancia del objeto
    constructor(prueba){
        console.log("Se ejecuto el metodo constructor de la clase Persona");
        console.log(prueba);
    };
    //Atributos
    //Metodos
};
class Mascota {
    constructor(){
        console.log("Metodo constructor de mascota")
    }
}
const johnDoe = new Persona("1,2,3, Probando"); // objeto
const puchi = new Mascota();

console.log(johnDoe);
console.log(puchi);