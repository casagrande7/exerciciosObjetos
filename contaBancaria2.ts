abstract class ContaBancaria2 {
    protected numeroConta: string;
    protected saldo: number;
    protected titular: string;

    constructor(numeroConta: string, saldo: number, titular: string) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.titular = titular;
    }

    abstract depositar(valor: number): void;
   

    abstract sacar(valor: number): void;



    abstract consultarSaldo(): number;

}

class ContaCorrente extends ContaBancaria2 {
    protected limiteChequeEspecial: number;

    constructor(limiteChequeEspecial: number) {
        super("1", 10000, "João");
        this.limiteChequeEspecial = limiteChequeEspecial
    }
    depositar(valor: number): void {
        this.saldo = (this.saldo + this.limiteChequeEspecial) + valor
        console.log("Novo valor após o depósito de 2000,00 reais: " + this.saldo);
    }

    sacar(valor: number): void {
       if(this.saldo >= valor){
        console.log("Novo saldo após o sucesso do saque: " + (this.saldo = this.saldo - valor))
       } else{
        console.log("Saque não pode ser efetivado");
       }
    
       
    } 

    consultarSaldo(): number {
        console.log("Novo saldo: " + this.saldo)
        return this.saldo
    }
}

class ContaPoupanca extends ContaBancaria2{
    
}

const contaCorrente = new ContaCorrente(5000);
contaCorrente.depositar(2000);
contaCorrente.sacar(10000);
contaCorrente.consultarSaldo();
contaCorrente.sacar(700)


