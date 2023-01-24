//POO - OOP - PROGRAMACION ORIENTADA A OBJETOS

const personaUno = {
    nombre: "Meli",
    edad: 32,
    email: "m@mail.com",
    materias: ["JavaScript", "React"],
    decirEdad: function (){
        return this.edad;
    }
};

const personaDos = {
    nombre: "Coco",
    edad: 37,
    email: "c@mail.com",
    materias: ["JavaScript", "Python"],
};

const personaTres = {
    nombre: "Pepe",
    edad: 12,
    email: "p@mail.com",
    materias: ["CSS", "Node"],
};

/*
    POO
    
    - crear moldes es el objetivo #1
    - un molde es algo q nos permite crear un objeto
    - el molde nos permite q todos los objetos tengan las mismas particularidades
    - permite crear objetos que puedan crear funcionalidades

    3 PILARES FUNDAMENTALES:

    - abstraccion
    - polimorfismo
        ej: todos vuelan pero de diferente forma
            -ave
            -avion
            -superman 
    - herencia

    PRINCIPIOS S.O.L.I.D. 
*/