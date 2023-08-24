class contaBancaria{
    nome: string;
    saldo: number;

    constructor(nome: string, saldo: number){
        this.nome = nome;
        this.saldo = saldo;
        
    }
    banco(){
        return "Meu nome é " + this.nome + " e tenho na minha conta R$" + this.saldo + " reais";
    }
    deposito(deposito: number): string{
        this.saldo = this.saldo + deposito
        return "Saldo atualizado após o depósito de R$ 500,00: R$" + this.saldo + " reais";
    }
    saque(saque: number): string{
        this.saldo = this.saldo - saque
        return "Saldo atualizado após o saque de R$ 200,00: R$" + this.saldo + " reais";
    }
    saqueNovo(saqueNovo: number): string{
        this.saldo = this.saldo - saqueNovo
        return "Saldo atualizado após o saque de R$ 1500,00: R$" + this.saldo + " reais";

    }

}

let minhaConta = new contaBancaria("João", 1000.00);
let contaMinha = new contaBancaria("Pedro", 1000.00);

console.log(minhaConta.banco());
console.log(minhaConta.deposito(500));
console.log(minhaConta.saque(200));
console.log(minhaConta.saqueNovo(1500));