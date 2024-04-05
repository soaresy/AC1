class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}


let usuarios = [
    new Usuario("Joao", 40),
    new Usuario("Giovana", 60),
    new Usuario("Carlito", 13),
    new Usuario("Lucas", 10)
];


let usuariosMaioresDeIdade = usuarios.filter(usuario => usuario.idade > 18);


let nomesUsuariosMaioresDeIdade = usuariosMaioresDeIdade.map(usuario => usuario.nome);


console.log("Usuários com idade superior a 18 anos:");
for (let nome of nomesUsuariosMaioresDeIdade) {
    console.log(nome);
}
