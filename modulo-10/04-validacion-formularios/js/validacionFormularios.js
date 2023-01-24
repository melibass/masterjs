const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const countries = document.querySelector("#countries");
const message = document.querySelector("#message");
const contactForm = document.querySelector("#contactForm");
const alertDiv = document.querySelector("#alert");
const fieldValidate = (event) =>{
    const field = event.target;
    const fieldValue = field.value.trim(); // sanitizo y quito espacios al principi y al final
    const spanTag = field.nextElementSibling;
    //console.log(spanTag)
    
    if(fieldValue === ""){
        spanTag.innerText = "Campo obligatorio"
    } else if (field.type === "email"){
            const emailIsValid = isValidEmail(fieldValue);
            if (!emailIsValid){
                spanTag.innerText = "Formato de correo invalido"
            }else{
                spanTag.innerText = ""
            }
    }else{
        spanTag.innerText = ""
    }

}

const isValidEmail= (string)=> {
   
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(string)
     
    }

fullName.addEventListener("blur", fieldValidate);
email.addEventListener("blur", fieldValidate);
//email.addEventListener("change", validateEmailFormat);
message.addEventListener("blur", fieldValidate);
countries.addEventListener("change", fieldValidate);

contactForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    if (fullNameValue === "" || emailValue === ""){
        alertDiv.insertAdjacentHTML("beforeend", "<strong> Revisa el formulario, hay campos vacios</strong>");
        return 
    }
    alertDiv.innerHTML = "";
    contactForm.reset();
    console.log("se envia la info")
})