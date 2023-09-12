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
        console.log("Preço Dos Produtos:");
        let soma = 0;
        this.produtos.forEach(produto => {
            soma = soma + produto.preco;
        });
        return soma.toFixed(2);
    }
    removerProduto(produto) {
        this.produtos = this.produtos.filter(item => item.nome !== produto.nome);
        return "Produto Removido";
    }
}
class Loja {
    constructor() {
        this.estoque = [];
        this.carrinhoDeCompras = new CarrinhoDeCompras();
    }
    adicionarEstoque(estoque) {
        this.estoque.push(estoque);
    }
    removerProdutoEstoque(produto) {
        this.estoque = this.estoque.filter(item => item.nome !== produto.nome);
    }
    adicionarCarrinhoDeCompras() {
        let produtoencontrado = this.estoque.find(estoque => estoque.nome == produto1.nome);
        if (produtoencontrado) {
        }
        else {
            return "Produto não adicionado";
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
carrinho.removerProduto(produto1);
console.log(carrinho.calcularTotalDeCompras());
const estoque = new Loja();
estoque.adicionarEstoque(produto1);
estoque.adicionarEstoque(produto2);
estoque.adicionarEstoque(produto3);
estoque.adicionarEstoque(produto4);
estoque.adicionarEstoque(produto2);
estoque.adicionarCarrinhoDeCompras();
