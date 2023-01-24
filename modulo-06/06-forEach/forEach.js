//FOR EACH - para iterar o recorrer un array, pero no retorna nada, si queremos que devuelva algo, debemos decirle q lo haga en un array especifico.

const superHeroes = ["Superman", "Wonder Woman", "Spiderman", "Iron Man", "Black Widow", "Black Panther"];

const nuevoArray = [];

/*superHeroes.forEach((heroe) =>{
    nuevoArray.push(heroe);
}); */
superHeroes.forEach((heroe) =>{
    if(heroe.length > 10){
    nuevoArray.push(heroe)};
});
console.log(nuevoArray);