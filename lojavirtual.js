"use strict";
class ProdutoLoja {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
class CarrinhoDeComprar {
    constructor() {
        this.produtosDoCarrinho = [];
    }
    adicionarProdutos(produtos) {
        this.produtosDoCarrinho.push(produtos);
    }
    removerProdutoDoCarrinho(produto) {
        this.produtosDoCarrinho = this.produtosDoCarrinho.filter(item => item.nome !== produto.nome);
        return "Produto Removido";
    }
    calcularValorTotalDeCompras() {
        console.log("Preço Dos Produtos: ");
        let soma = 0;
        this.produtosDoCarrinho.forEach(produto => {
            soma = soma + produto.preco;
        });
        return soma.toFixed(2);
    }
    exibirProdutos() {
        console.log("Produtos da Loja");
        if (this.produtosDoCarrinho.length > 0)
            for (let i = 0; i < this.produtosDoCarrinho.length; i++)
                console.log("Produtos: " + this.produtosDoCarrinho[i].nome + " Preços: " + this.produtosDoCarrinho[i].preco.toFixed(2));
    }
}
class Loja {
    constructor() {
        this.estoque = [];
        this.carrinhoDeCompras = new CarrinhoDeComprar();
    }
    adicionarProdutoNoEstoque(produtos) {
        this.estoque.push(produtos);
        return "Produto Adicionado ao Estoque";
    }
    removerProdutoDoEstoque(produtos) {
        this.estoque = this.estoque.filter(item => item.nome !== produtos.nome);
        return "Produto Removido do Estoque";
    }
    adicionarProdutosNoCarrinhoDeCompras(produtos) {
        let produtoEncontado = this.estoque.find(item => item.nome === produtos.nome);
        if (produtoEncontado) {
            this.carrinhoDeCompras.adicionarProdutos(produtos);
            return "Produto Adicionado ao Carrinho de Compras";
        }
        else {
            return "Produto não adicionado ao Carrinho de Compras";
        }
    }
    exibirProdutosDoCarrinho() {
        return this.carrinhoDeCompras.exibirProdutos();
    }
    exibirTotalCarrinho() {
        return this.carrinhoDeCompras.calcularValorTotalDeCompras();
    }
    removerProdutoDoCarrinho(produtos) {
        return this.carrinhoDeCompras.removerProdutoDoCarrinho(produtos);
    }
}
const produto1 = new ProdutoLoja("Tênis Nike Air Force", 500.00);
const produto2 = new ProdutoLoja("Iphone 14 Pro Max", 4500.00);
const produto3 = new ProdutoLoja("Apple Watch", 2350.00);
const produto4 = new ProdutoLoja("Mac Book", 5000.00);
const produto5 = new ProdutoLoja("Malbec Elegant", 200.00);
const loja = new Loja();
console.log(loja.adicionarProdutoNoEstoque(produto1));
console.log(loja.adicionarProdutoNoEstoque(produto2));
console.log(loja.adicionarProdutoNoEstoque(produto3));
console.log(loja.adicionarProdutoNoEstoque(produto4));
console.log(loja.adicionarProdutosNoCarrinhoDeCompras(produto1));
console.log(loja.adicionarProdutosNoCarrinhoDeCompras(produto2));
console.log(loja.adicionarProdutosNoCarrinhoDeCompras(produto3));
console.log(loja.adicionarProdutosNoCarrinhoDeCompras(produto4));
console.log(loja.adicionarProdutosNoCarrinhoDeCompras(produto5));
console.log(loja.exibirProdutosDoCarrinho());
console.log(loja.exibirTotalCarrinho());
console.log(loja.removerProdutoDoCarrinho(produto1));
console.log(loja.removerProdutoDoEstoque(produto1));
console.log(loja.exibirTotalCarrinho());
console.log(loja.exibirTotalCarrinho());
