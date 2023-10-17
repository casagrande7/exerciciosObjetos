enum StatusPedido {
    AguardandoPreparo = 'Aguardando Preparo',
    EmPreparo = 'Em preparo',
    SaiuParaEntrega = 'Saiu para Entrega',
    Entregue = 'Produto entregue'
}
class ProdutoPedido {
    nome: string;
    valor: number;

    constructor(nome: string, valor: number) {
        this.nome = nome;
        this.valor = valor;
    }
}
class Pedido {
    private produtos: ProdutoPedido[] = [];
    private status: StatusPedido;

    constructor() {
        this.produtos = [];
        this.status = StatusPedido.AguardandoPreparo;
    }

    adicionarProdutos(produto: ProdutoPedido) {
        this.produtos.push(produto);
    }

    atualizarStatus(status: StatusPedido) {
        this.status = status;
    }

    exibirStatus() {
        return 'Status do Produto: ' + this.status
    }

    exibirProdutosDoPedido() {
        console.log("Produtos Pedidos: ")
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
console.log(pedidos.atualizarStatus(StatusPedido.EmPreparo))
console.log("Status atual do Pedido " + pedidos.exibirStatus());
pedidos.exibirProdutosDoPedido();
console.log(pedidos.exibirStatus());
