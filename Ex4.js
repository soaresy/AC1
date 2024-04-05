function gerarEmail(nome) {
    let partesNome = nome.split(" ");

    let primeiroNome = partesNome[0];

    let ultimoNome = partesNome[partesNome.length - 1];

    let email = `${primeiroNome}.${ultimoNome}@facens.br`;
    
    return email;
}

let nomeVariavel = "João Soares";
let email = gerarEmail(nomeVariavel);
console.log(email);
