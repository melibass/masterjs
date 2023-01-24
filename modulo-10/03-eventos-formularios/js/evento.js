const countries = document.querySelector("#countries");
console.log(countries);

const fullName = document.querySelector("#fullName");
console.log(fullName);

const contactform = document.querySelector("#contactForm");

// EVENTOS DE FORMULARIO

countries.addEventListener("change", ()=>{
    console.log("Cambio el pais")
})
// FOCUS: cuando me poso sobre el campo del formulario
fullName.addEventListener("focus", ()=> {
    console.log("Hiciste foco sobre el fullName")
});

//BLUR: cuando quito el cursor del campo
fullName.addEventListener("blur", () =>{
    console.log("Sacaste el foco del fullName")
})

//INPUT: cuando estamos haciendo algo dentro del campo

fullName.addEventListener("input", () =>{
    console.log("esto se ejecuta cuando se escribe dentro del campo")
})

// CHANGE: cuando cambia el valor del campo y a su vez el valor ha sido cambiado
fullName.addEventListener("change", () =>{
    console.log("El valor del campo  cambio")
})

//EVENTO SUBMIT: debo capturar el formualrio completo, se implenta sobre el FORM y NO sobre el boton

contactform.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("SE enviara la info a algun lugar")
});