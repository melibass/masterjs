//HERENCIA

class Persona {
    #nombre; // atributo privado
    #apellido; // atributo privado
    #edad; // atributo privado
    #mascota; // atributo privado

    // Constructor
    constructor(nombre, apellido) {
        // Atributos
        this.#nombre = nombre;
        this.#apellido = apellido;
    }

    // Métodos
    getNombre() {
        return this.#nombre;
    }

    getApellido() {
        return this.#apellido;
    }

    getNombreCompleto() {
        return `${this.#nombre} ${this.#apellido}`;
    }

    getEdad() {
        return this.#edad;
    }


    setEdad(edad) {
        this.#edad = edad;
    }

}


// Instancia = Creación de un objeto a partir de una classe (molde)
const meliBass = new Persona ("Meli", "Bassano");

console.log(meliBass.getNombreCompleto());

//HERECIA - extends. Hace referencia a q una clase hereda atributos y metodos de otra.
class Estudiante extends Persona {
    #curso;

    constructor(nombre, apellido){
        super(nombre, apellido) // accede ak constructor de la clase principal. para que el constructor pueda usar los parametros, ya que quien tiene la orden de que hacer con ellos es el constructor de la clase principal
    }
    getCurso(){
        return this.#curso;
    }
    setCurso(curso){
        if (curso instanceof Curso){
        this.#curso = curso;
    }
    }
}

class Curso {
    #nombre;
    #materias = [];
    constructor (nombre){
        this.#nombre = nombre;
    }
    getNombre(){
        return this.#nombre;
    }
    getMaterias(){
        return this.#materias;
    }
    setMateria (unaMateria){
        this.#materias.push(unaMateria);
        }
}

const javiHerrera = new Estudiante("Javi", "Herrera");

const cursoFrontEnd = new Curso ("Front End con JS");
cursoFrontEnd.setMateria({lenguaje: "HTML", cargaHoraria: 24});
cursoFrontEnd.setMateria({lenguaje: "CSS", cargaHoraria: 32});
cursoFrontEnd.setMateria({lenguaje: "JavaScript", cargaHoraria: 688});
console.log(cursoFrontEnd.getNombre());
console.log(cursoFrontEnd.getMaterias());
javiHerrera.setCurso(cursoFrontEnd);

console.log(javiHerrera.getCurso());
console.log(`Hola, mi nombre es ${javiHerrera.getNombreCompleto()}`);
console.log(`Estoy cursando ${javiHerrera.getCurso().getNombre()}`);
const materiasCursoJavi =  javiHerrera.getCurso().getMaterias();

for (unaMateria of materiasCursoJavi){
    console.log(`La materia ${unaMateria.lenguaje} tiene una carga horaria de ${unaMateria.cargaHoraria} hs.`)
}