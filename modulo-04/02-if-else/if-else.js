//SENTENCIA IF -- ELSE
let clima = "soleado";
let horario = 21;
let dia = "domingo";

console.log((clima === "soleado" && horario < 18) || dia === "domingo");
if ((clima === "soleado" && horario < 18) || dia === "domingo"){
    let mensaje = "Que bueno, vamos a dar un paseo";
    console.log(`El clima esta ${clima} y son las ${horario}, ${mensaje}`);
} else {
    console.log("Mejor nos quedamos en casa a estudiar con JaviScript");
}

