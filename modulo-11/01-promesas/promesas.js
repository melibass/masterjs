//ASINCRONISMO - PROMESAS
const users = [
    {name:"John" , email: "john@email.com"},
    {name: "Jane", email: "jane@email.com"},
    {name: "Meli" , email: "meli@email.com"},
    {name: "Sopa" , email: "sopa@email.com"}
];

/*
const getUsers = () => {
    // ejecuto funciones en cierta cantidad de tiempo, indicado luego del callback en milisegundos
    setTimeout(()=>{
        users
    },1500);    
    
};
*/

const getUsers = () => {
    return new Promise((resolve, reject) => {
        if(false){
        setTimeout(()=>{
            resolve(users);
        },1500);} else {
        //si no se resuelve, se rechaza
        reject ("No se pudo concretar la solicitud")    
        }
    });
    
};
//debo ejecutar la funcion, para q uando la promesa se cumpla, THEN/ENTONCES, nos muestre la info, o data.
getUsers() // si la info llega, entra al then
    .then((data) => {
        const usersDB = data;
        console.log(usersDB)
    }) // si la info no llega, capturo el error.
    .catch((error)=>{
        console.log(error);
    });

