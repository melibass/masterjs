//if else

/*let clima = "nublado";
let horario = 21;
let diaa = "domingo";

if (clima === "soleado" && horario < 18) {
    let mensaje = "Que bueno, vamos a dar un paseo";
    console.log(`El clima esta ${clima} y son las ${horario}, ${mensaje}`);
} else if(dia === "domingo"){
    console.log("Ok, no hace sol y esta algo tarde, pero es domingo, vamos a dar un paseo");
}else{
    console.log("Mejor nos quedamos en casa a estudiar con JaviScript");
}*/

//sentencia switch modificada a else if

let day = "Sunday";
let dia;

if (day === "Monday") {
        dia = "Lunes";
} else if (day === "Tuesday"){
        dia = "Martes";
} else if (day === "Wednesday") {
    dia = "Miercoles";
} else if (day === "Thursday") {
    dia = "Jueves";
} else if (day === "Friday") {
    dia = "Viernes";
}  else if (day === "Saturday") {
    dia = "Sabado";
}else{
    dia = "Domingo";
}


console.log(`El dia es ${dia}`);