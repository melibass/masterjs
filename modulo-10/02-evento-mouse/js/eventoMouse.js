const body= document.querySelector("body");
const btn01= document.querySelector("#btn01");
const btn02 = document.querySelector("#btn02");
console.log(btn02);

const colors = ["yellow", "orange", "green", "red", "pink", "olive", "salmon",]
/*

1er argumento: nombre del evento(sin la palabra "on")
2do: callback, function. el propio event handler.
 */
btn01.addEventListener("dblclick",()=>{
    const randomNumber = Math.floor(Math.random()*colors.length);
    const chosenColor = colors[randomNumber];
    console.log(randomNumber);
    console.log(chosenColor);
    body.style.backgroundColor = chosenColor;
});

const cssClasses = ["light","dark", "cream", "mistery"];

btn02.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * cssClasses.length);
    const choosenClass = cssClasses[randomNumber];
    body.style.backgroundColor = "";
    body.classList.remove(...cssClasses);
    body.classList.add(choosenClass);
});