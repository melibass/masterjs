//MAP & FILTER

const notas = [2.5, 4, 6.3, 8, 3.4];

//MAP - metodo de array q nos permite operar con uno, y obtener un array nuevo

const notasPor2 = notas.map( (unaNota)=> {
        return unaNota * 2;
});

console.log(notasPor2);

const estudiantes = ["Juana", "Marina", "Pablo", "Pedro","Raul", "Carolina"];


const sumarApellido = (estudiante) => {
    return `${estudiante} Doe`;
};

const estudiantesConApellido = estudiantes.map(sumarApellido);
console.log(estudiantes);
console.log(estudiantesConApellido);

//FILTER - busca en un array y devuelve en otro array los elementos q cumplan con lo planteado en el return

const notasDelSemestre = [5,7,3,2,1,8,10,7];

const notasAprobadas = notasDelSemestre.filter((nota) =>{
        return nota > 6;
});

console.log(notasAprobadas);

const nombres = ["Maria", "Pedro", "Carolina", "Walter", "Rocio", "Diego", "Federico"];

const nombresLargos = nombres.filter((nombre) => nombre.length >= 6 );
console.log(nombresLargos);