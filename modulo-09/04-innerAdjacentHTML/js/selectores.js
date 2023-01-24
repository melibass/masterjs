const dynamicContentTag = document.querySelector("#dynamicContent");

//insert Adjacent HTML - se ejecuta sobre los elementos del DOM.
// se pasan dos argumentos: ubicacion donde quiero insertar contenido, y el contenido que quiero insertar
// hay 4 opciones de ubicacion: 
//1. BEFORE BEGIN: permite insertarlo antes de q la etiqueta comience.
/*dynamicContentTag.insertAdjacentHTML("beforebegin", "<strong>BEFORE BEGIN</strong>");
//2. AFTERBEGIN: permite insertarlo inmediatamente despues de que comience la etiqueta.
dynamicContentTag.insertAdjacentHTML("afterbegin", "<strong>AFTER BEGIN</strong>");
//3. BEFORE END: permite insertarlo justo antes de que se cierre la etiqueta
dynamicContentTag.insertAdjacentHTML("beforeend", "<strong>BEFORE END</strong>");
//4. AFTER END: permite insertarlo inmediatamente despues de que se cierre la etiqueta.
dynamicContentTag.insertAdjacentHTML("afterend", "<strong>AFTER END</strong>");

*/


const students = [
    {
        name: "John", 
        lastName: "Goodman" , 
        email: "john@mail.com", 
        avatar: "https://i.pravatar.cc/150?img=3"},
    {
        name: "Mary", 
        lastName: "Johnson", 
        email: "mary@mail.com",
        avatar: "https://i.pravatar.cc/150?img=6"},
    {
        name: "Sam", 
        lastName: "Smith", 
        email: "sam@mail.com",
        avatar: "https://i.pravatar.cc/150?img=2"},
    {
        name: "Sarah", 
        lastName: "Rogers", 
        email: "sarah@mail.com",
        avatar: "https://i.pravatar.cc/150?img=8"},
        {
            name: "Peter", 
            lastName: "Blue", 
            email: "peter@mail.com",
            avatar: "https://i.pravatar.cc/150?img=1"},

];

for (const student of students) {
    dynamicContentTag.insertAdjacentHTML("beforeend",
    `
        <img src="${student.avatar}">
        <p>Nombre: ${student.name} ${student.lastName}</p>
        <a href="mailto:${student.email}">${student.email}</a>
        
    `);
    
}