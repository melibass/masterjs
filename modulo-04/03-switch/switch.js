//SWITCH
let day = "Sunday";
let dia;

switch (day) {
    case "Monday":
        dia = "Lunes";
        break;
    case "Tuesday":
        dia = "Martes";
        break;
    case "Wednesday":
        dia = "Miercoles";
        break;
    case "Thrusday":
        dia = "Jueves";
        break;
    case "Friday":
        dia = "Viernes";
        break;
    case "Saturday":
        dia = "Sabado";
        break;
    default:
        dia = "Domingo";
    
}

console.log(`El dia es ${dia}`);