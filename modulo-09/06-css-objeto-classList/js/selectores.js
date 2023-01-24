//OBJETO CLASS LIST

const title = document.querySelector("h1");

//metodo ADD
title.classList.add("main-title");
console.log(title.classList);
//metodo CONTAINS - pregunta si tal elemento tiene tal clase - retorna booleano
console.log(title.classList.contains("que-no-existe")); //false
console.log(title.classList.contains("main-title")); //true

//capturo todos los p dentro del elemento home-content .. selector descendente
const paragraphs = document.querySelectorAll(".home-content p");

/*for (const paragraph of paragraphs) {
    const lengthParagraph = paragraph.innerText.length
    if(lengthParagraph > 500){
   paragraph.classList.add("cool-paragraph")
}
}*/

for (const paragraph of paragraphs) {
 
   paragraph.classList.add("cool-paragraph")

}

//console.log(paragraphs)

//metodo REMOVE
for (const paragraph of paragraphs) {
    const lengthParagraph = paragraph.innerText.length
    if(lengthParagraph < 300){
   paragraph.classList.remove("cool-paragraph")
}
}

//metodo TOGGLE - interruptor, si el elemento no tiene la clase la AGREGA, y si la tiene la QUITA
const body = document.querySelector("body");
body.classList.toggle("dark");
