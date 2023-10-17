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
        if (this.produtos.length > 0) {
            for (let i = 0; i < this.produtos.length; i++) {
                console.log("Produto: " + this.produtos[i].nome + " Preço: " + this.produtos[i].valor.toFixed(2));
            }
        }
    }
}
const produtos1 = new ProdutoPedido("Tênis Nike Air Force", 500.00);
const produtos2 = new ProdutoPedido("Iphone 14 Pro Max", 4500.00);
const pedidos = new Pedido();
console.log(pedidos.adicionarProdutos(produtos1));
console.log(pedidos.adicionarProdutos(produtos2));
console.log(pedidos.exibirProdutosDoPedido());
console.log(pedidos.exibirStatus());
console.log(pedidos.exibirStatus());
console.log(pedidos.atualizarStatus(StatusPedido.EmPreparo));
console.log(pedidos.exibirStatus());
