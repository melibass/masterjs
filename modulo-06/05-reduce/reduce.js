//REDUCE - itera un array y utiliza un callback con un acumulador, y se utiliza para reducir un array a su minima expresion, permite operar con los elementos

const notasDelSemestre = [8, 9, 3, 5, 7, 10, 2, 4.5];

const totalDeNotas = notasDelSemestre.reduce((acum, nota)=>acum + nota);

const promedioSemestre = Math.round(totalDeNotas / notasDelSemestre.length);

console.log(totalDeNotas);
console.log(promedioSemestre);

const mascotas = ["Koen", "Azabache", "Jacko"];

const todasLasMascotas = mascotas.reduce((acum, mascota) =>` ${acum} ${mascota}`, "Mis mascotas se llaman: ");

console.log(todasLasMascotas);