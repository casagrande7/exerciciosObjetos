"use strict";
class ContaBancaria2 {
    constructor(numeroConta, saldo, titular) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.titular = titular;
    }
}
class ContaCorrente extends ContaBancaria2 {
    constructor(limiteChequeEspecial) {
        super("1", 10000, "João");
        this.limiteChequeEspecial = limiteChequeEspecial;
    }
    depositar(valor) {
        this.saldo = (this.saldo + this.limiteChequeEspecial) + valor;
        console.log("Novo valor após o depósito de 2000,00 reais: " + this.saldo);
    }
    sacar(valor) {
        if (this.saldo >= valor) {
            console.log("Novo saldo após o sucesso do saque: " + (this.saldo = this.saldo - valor));
        }
        else {
            console.log("Saque não pode ser efetivado");
        }
    }
    consultarSaldo() {
        console.log("Novo saldo: " + this.saldo);
        return this.saldo;
    }
}
class ContaPoupanca extends ContaBancaria2 {
}
const contaCorrente = new ContaCorrente(5000);
contaCorrente.depositar(2000);
contaCorrente.sacar(10000);
contaCorrente.consultarSaldo();
contaCorrente.sacar(700);
