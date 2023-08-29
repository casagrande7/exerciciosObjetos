"use strict";
class Funcionario {
    constructor(nome, cargo, salario_bruto, inss, ir) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario_bruto = salario_bruto;
        this.inss = inss;
        this.ir = ir;
    }
    aumento(aumento) {
        this.salario_bruto = this.salario_bruto + (this.salario_bruto * aumento) / 100;
        return "Funcionária: " + this.nome + " exerço o cargo: " + this.cargo + " ,aumento de 10% aplicado. Novo salário: " + this.salario_bruto + " reais";
    }
    taxas() {
        this.inss = (this.salario_bruto * this.inss) / 100;
        this.ir = (this.salario_bruto * this.ir) / 100;
        let impostos = this.inss + this.ir;
        this.salario_bruto = this.salario_bruto - this.inss;
        this.salario_bruto = this.salario_bruto - this.ir;
        return "Funcionária: " + this.nome + " Salário Bruto: " + this.salario_bruto + " Impostos a serem pagos: " + impostos + " Salário líquido: " + this.salario_bruto;
    }
}
let funcionario = new Funcionario("Ana Silva", "Analista de Vendas", 3000.00, 11, 7.5);
let operario = new Funcionario("João Pedro", "Analista de Vendas", 5300.00, 11, 7.5);
console.log(funcionario.aumento(10));
console.log(funcionario.taxas());
console.log(operario.aumento(10));
console.log(operario.taxas());
