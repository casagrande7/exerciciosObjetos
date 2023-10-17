"use strict";
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["AguardandoPreparo"] = "Aguardando Preparo";
    StatusPedido["EmPreparo"] = "Em preparo";
    StatusPedido["SaiuParaEntrega"] = "Saiu para Entrega";
    StatusPedido["Entregue"] = "Produto entregue";
})(StatusPedido || (StatusPedido = {}));
class ProdutoPedido {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
}
class Pedido {
    constructor() {
        this.produtos = [];
        this.produtos = [];
        this.status = StatusPedido.AguardandoPreparo;
    }
    adicionarProdutos(produto) {
        this.produtos.push(produto);
    }
    atualizarStatus(status) {
        this.status = status;
    }
    exibirStatus() {
        return 'Status do Produto: ' + this.status;
    }
    exibirProdutosDoPedido() {
        console.log("Produtos Pedidos: ");
        for (let i = 0; i < this.produtos.length; i++) {
            console.log("Produto: " + this.produtos[i].nome + " Preço: " + this.produtos[i].valor.toFixed(2));
        }
    }
}
const produtoPedido1 = new ProdutoPedido("Tênis Nike Air Force", 500.00);
const produtoPedido2 = new ProdutoPedido("Iphone 14 Pro Max", 4500.00);
const pedidos = new Pedido();
console.log(pedidos.adicionarProdutos(produtoPedido1));
console.log(pedidos.adicionarProdutos(produtoPedido2));
console.log("Status atual do Pedido " + pedidos.exibirStatus());
console.log(pedidos.atualizarStatus(StatusPedido.EmPreparo));
console.log("Status atual do Pedido " + pedidos.exibirStatus());
pedidos.exibirProdutosDoPedido();
console.log(pedidos.exibirStatus());
