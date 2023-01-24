
const h1Tag = document.querySelector("h1");
//innerHTML no solo trabaja con texto, sino que con estructura HTML y sus etiquetas
h1Tag.innerHTML = `${h1Tag.innerHTML} <em>es lo mejor </em>`
//contenido de un elemento
const h1Text = h1Tag.innerText;

console.log(h1Text);

/*const bodyTag = document.querySelector("body");
const bodyContent = bodyTag.innerHTML;
console.log(bodyContent);*/
const firstP = document.querySelector("p");


// capturo el texto y le asigno el texto asignado pasado a mayuscula
firstP.innerText = firstP.innerText.toUpperCase();
