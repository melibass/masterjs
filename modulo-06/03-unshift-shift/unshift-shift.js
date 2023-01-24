//METODOS UNSHIFT & SHIFT - inserta o elimina elementos al principio del array

const superHeroes = ["Superman", "Wonder Woman", "Iron Man", "Hulk"];

//insertar al principio
superHeroes.unshift("Wolverine", "Xavier", "Spider Man", "Black Widow");

//quitar del principio - elimina el primer elemento del array, al igual que pop, lo puedo guardar en una variable si quiero.
const elPrimero = superHeroes.shift();

console.log(superHeroes);
console.log(elPrimero);