//METODOS DE UNA CLASE

class Persona {
    
    #nombre;
    #apellido;
    #edad;
    #mascota;
    //Constructor
    constructor(nombre, apellido){
       this.#nombre = nombre;
       this.#apellido = apellido;
       
    };
    
    //Metodos
    //getters = obtener info
    //setters = establecer info
    getNombre(){
        return this.#nombre;
    };
    getApellido(){
        return this.#apellido;
    };
    getNombreCompleto(){
        return `${this.#nombre} ${this.#apellido} `
    };
    getEdad (){
        return this.#edad;
    };
    getMascota(){
        return this.#mascota;
    };
    setEdad (edad){
        this.#edad = edad;
    };
    setMascota (laMascota){
        if (laMascota instanceof Mascota){
            this.#mascota = laMascota;
            return; //corto ejecucion si se cumple la condicion.
        }
        console.log("ERROR: intentaste setear algo que no es una Mascota")
        console.log(`Estas en la persona: ${this.getNombreCompleto()}`)

    }
};

class Mascota {
    #nombre;
    #tipo;

    constructor(nombre, tipo){
        this.#nombre = nombre;
        this.#tipo = tipo;
    };

    getInformation(){
        return `${this.#nombre} - ${this.#tipo}`;
    };
    
}

const jhonDoe = new Persona("Jhon", "Doe"); // Objeto
const marieSmithers = new Persona("Marie", "Smithers"); // Objeto
jhonDoe.setEdad(35);
marieSmithers.setEdad(27);

const puchi = new Mascota("Puchi", "Perro");

jhonDoe.setMascota("Una mascota falsa");
marieSmithers.setMascota(puchi);

console.log(jhonDoe.getNombreCompleto());
console.log(jhonDoe.getEdad());
console.log(marieSmithers.getNombreCompleto());
console.log(marieSmithers.getEdad());

const mascotaMarie = marieSmithers.getMascota();
console.log(mascotaMarie.getInformation());

//console.log(puchi.getNombre());