class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}


let usuarios = [
    new Usuario("joao", 90),
    new Usuario("Marley", 37),
    new Usuario("davi", 26),
    new Usuario("sandro", 24)
];


let primeiroUsuarioEntre25e30 = usuarios.find(usuario => usuario.idade >= 25 && usuario.idade <= 30);


console.log("Nome do primeiro usuário com idade entre 25 e 30 anos:");
console.log(primeiroUsuarioEntre25e30.nome);