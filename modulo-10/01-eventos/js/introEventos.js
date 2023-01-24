/*console.log("prueba");

//event handlers = funciones q administran lo que sucede en un evento.
// el addeventlistener se debe aplicar a UN elemento del DOM y no a arrays u objetos.


window.onload = function (){
    const allParagraphs = document.querySelectorAll("p");
    for (const paragraph of allParagraphs) {
        paragraph.style.backgroundColor = "salmon"
        
    }
    console.log(allParagraphs);
};
window.onload = function (){
    const mainTitle = document.querySelector("h1");
    mainTitle.style.color ="red";
};*/
//******************************************************* */
//Event handler que se utiliza

/*
1er argumento: nombre del evento(sin la palabra "on")
2do: callback, function. el propio event handler.
 */
window.addEventListener("load",()=>{
    const allParagraphs = document.querySelectorAll("p");
    for (const paragraph of allParagraphs) {
        paragraph.style.backgroundColor = "salmon"
        
    }
});
window.addEventListener("load",()=>{
    const mainTitle = document.querySelector("h1");
    mainTitle.style.color ="red";
});