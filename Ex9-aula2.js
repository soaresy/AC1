class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

let produtos = [
    new Produto("Bone", 50.0),
    new Produto("Calça", 120.0),
    new Produto("bermuda", 80.0),
    new Produto("Camisa", 90.0)
];

let produtoCaro = null;
for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].preco > 100.0) {
        produtoCaro = produtos[i];
        break;
    }
}

if (produtoCaro) {
    produtoCaro.nome = "Produto Caro";
}

produtos.forEach(produto => {
    console.log(`Nome: ${produto.nome}, Preço: R$${produto.preco.toFixed(2)}`);
});
