//SELECTORES

/* herramienta del DOM  q nos permite capturar elementos del documento

Acceder:

document.SELECTOR("tag || class || id");
*/

//querySelector: calcula la primer etiqueta que matchea
const h1Tag = document.querySelector("h1");

console.log(h1Tag);

const h5Tag = document.querySelector("h5");

console.log(h5Tag)

const pTag = document.querySelector("p");
console.log(pTag);

//querySelectorAll : calcula todas las etiquetas que coinciden

const pTags = document.querySelectorAll("p");
console.log(pTags);

//POR ID
const sub01 = document.querySelector("#sub01");
console.log(sub01);

//POR CLASE
const specialParagraphs = document.querySelectorAll(".special-paragraph");
console.log(specialParagraphs);