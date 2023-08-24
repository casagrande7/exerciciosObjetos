"use strict";
class contaBancaria {
    constructor(nome, saldo) {
        this.nome = nome;
        this.saldo = saldo;
    }
    banco() {
        return "Meu nome é " + this.nome + " e tenho na minha conta R$" + this.saldo + " reais";
    }
    deposito(deposito) {
        this.saldo = this.saldo + deposito;
        return "Saldo atualizado após o depósito de R$ 500,00: R$" + this.saldo + " reais";
    }
    saque(saque) {
        this.saldo = this.saldo - saque;
        return "Saldo atualizado após o saque de R$ 200,00: R$" + this.saldo + " reais";
    }
    saqueNovo(saqueNovo) {
        this.saldo = this.saldo - saqueNovo;
        return "Saldo atualizado após o saque de R$ 1500,00: R$" + this.saldo + " reais";
    }
}
let minhaConta = new contaBancaria("João", 1000.00);
let contaMinha = new contaBancaria("Pedro", 5000.00);
let contabMiha = new contaBancaria("Gabriel", 10000);
console.log(minhaConta.banco());
console.log(minhaConta.deposito(500));
console.log(minhaConta.saque(200));
console.log(minhaConta.saqueNovo(1500));
console.log(contaMinha.banco());
console.log(contaMinha.deposito(2600));
console.log(contaMinha.saque(500));
console.log(contaMinha.saqueNovo(3000));
console.log(contabMiha.banco());
console.log(contabMiha.deposito(10000));
console.log(contabMiha.saque(7000));
console.log(contabMiha.saqueNovo(8000));
