//PARAMETROS DEFAULT

const saludar = (nombrePersona = "persona desconocida") => `Hola ${nombrePersona}`;

console.log(saludar("Pancho"));
console.log(saludar());

const getUserAge = (name = "unknown person", yearBirth) => {
    const currentAge = 2022 - yearBirth;
    return `Hello ${name}! Your current age is ${currentAge}`; 
} ;

console.log(getUserAge("Meli", 1990));
console.log(getUserAge(1990)); // se tomaria 1990 como la variable name, ya q los parametros vacios deben ponerse al final, aun asi cuando se determine un default, de otra forma se "corren" los parametros


