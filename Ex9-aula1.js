function validarEmail(email) {

    let indiceArroba = email.indexOf('@');
    if (indiceArroba === -1 || email.indexOf('@', indiceArroba + 1) !== -1) {
        return false;
    }

    let indicePonto = email.indexOf('.', indiceArroba);
    if (indicePonto === -1 || indicePonto === email.length - 1) {
        return false; 
    }

    return true; 
}

// Exemplo de uso
let emailValido = "Joao@Gmail.com";
let emailInvalido1 = "Joao@";
let emailInvalido2 = "Joao@@Gmail.com";
let emailInvalido3 = "Joao@email";
let emailInvalido4 = "Joao_Gmail.com";

console.log(validarEmail(emailValido));
console.log(validarEmail(emailInvalido1)); 
console.log(validarEmail(emailInvalido2)); 
console.log(validarEmail(emailInvalido3)); 
console.log(validarEmail(emailInvalido4));
