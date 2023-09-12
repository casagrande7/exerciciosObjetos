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
        return "Estoque adicionado";
    }
    removerProdutoEstoque(produto) {
        this.estoque = this.estoque.filter(item => item.nome !== produto.nome);
        return "Produto removido do estoque";
    }
    adicionarCarrinhoDeCompras(produto) {
        let produtoencontrado = this.estoque.find(estoque => estoque.nome == produto.nome);
        if (produtoencontrado) {
            this.carrinhoDeCompras.adicionarProdutos(produto);
            return "Produto adicionado ao carrinho de compras";
        }
        else {
            return "Produto não adicionado";
        }
    }
    exibirProdutosCarrinho() {
        if (this.estoque.length > 0) {
            for (let i = 0; i < this.estoque.length; i++) {
                console.log("Produto: " + this.estoque[i].nome + " Preço: " + this.estoque[i].preco.toFixed(2));
            }
        }
    }
    exibirTotalCarrinho() {
        return this.carrinhoDeCompras.calcularTotalDeCompras();
    }
    removerCarrinho(produto) {
        return this.carrinhoDeCompras.removerProduto(produto);
    }
}
const produto1 = new ProdutoLoja("Tênis Nike Air Force", 500.00);
const produto2 = new ProdutoLoja("Iphone 14 Pro Max", 4500.00);
const produto3 = new ProdutoLoja("Apple Watch", 2350.00);
const produto4 = new ProdutoLoja("Mac Book", 5000.00);
const produto5 = new ProdutoLoja("Malbec Elegant", 200.00);
const loja = new Loja();
console.log(loja.adicionarEstoque(produto1));
console.log(loja.adicionarEstoque(produto2));
console.log(loja.adicionarEstoque(produto3));
console.log(loja.adicionarEstoque(produto4));
console.log(loja.adicionarCarrinhoDeCompras(produto1));
console.log(loja.adicionarCarrinhoDeCompras(produto2));
console.log(loja.adicionarCarrinhoDeCompras(produto3));
console.log(loja.adicionarCarrinhoDeCompras(produto4));
console.log(loja.adicionarCarrinhoDeCompras(produto5));
console.log(loja.exibirProdutosCarrinho());
console.log(loja.exibirTotalCarrinho());
console.log(loja.removerCarrinho(produto1));
console.log(loja.removerProdutoEstoque(produto1));
console.log(loja.exibirProdutosCarrinho());
console.log(loja.exibirTotalCarrinho());
