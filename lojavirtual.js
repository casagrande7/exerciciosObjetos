"use strict";
class ProdutoLoja {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
class CarrinhoDeCompras {
    constructor() {
        this.produtos = [];
    }
    adicionarProdutos(produtos) {
        this.produtos.push(produtos);
    }
    calcularTotalDeCompras() {
        console.log("Total de Compras");
        for (let i = 0; i < this.produtos.length; i++) {
            console.log(this.produtos[i].preco);
        }
    }
}
const produto1 = new ProdutoLoja("Tênis Nike Air Force", 500.00);
const produto2 = new ProdutoLoja("Iphone 14 Pro Max", 4500.00);
const produto3 = new ProdutoLoja("Apple Watch", 2350.00);
const produto4 = new ProdutoLoja("Mac Book", 5000.00);
const carrinho = new CarrinhoDeCompras();
carrinho.adicionarProdutos(produto1);
carrinho.adicionarProdutos(produto2);
carrinho.adicionarProdutos(produto3);
carrinho.adicionarProdutos(produto4);
console.log(carrinho.calcularTotalDeCompras());
