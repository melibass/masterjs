/*API es un lugar de internet donde puedo acceder a info.
FETCH es una promesa de JS. 

fetch("")
.then() // para cuando la promesa se resuelva. 
    Este primer THEN sirve para buscar la info y retenerla para luego
    recibo la respuesta, y con el metodo.json() la transofrmo en un objeto para luego trabajar la info
    .then() // para cuando la info llegue
    En el segundo THEN usarla.
.catch() // para capturar los erorres si es que los hay.

*/

const usersList = document.querySelector("#usersList");

fetch("https://reqres.in/api/users?page=2")
    .then((response)=> response.json())// el response.json() SIEMPRE ES un return
    .then((info)=>{  // info hace referencia a todo lo que compone la respuesa en formato json.
        const users = info.data;
        for (const user of users ){
            usersList.insertAdjacentHTML(
                "beforeend",
                `
                <div>
                    <img src="${user.avatar}" alt="" />
                    <h2>${user.first_name} ${user.last_name}</h2>
                    <a href="mailto:${user.email}">${user.email}</a>
                    <hr/>
                </div>
                `
            )
        }
    }).catch((error)=> {
        console.log(error)
    });

