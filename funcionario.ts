class Funcionario{
    nome: string;
    cargo: string;
    salario_bruto: number;
    inss: number;
    ir: number
    
    constructor(nome: string, cargo: string, salario_bruto: number, inss: number, ir: number){
        this.nome = nome;
        this.cargo = cargo; 
        this.salario_bruto = salario_bruto;
        this.inss = inss;
        this.ir = ir;
        
    }
    impostos(inss: number, ir: number){
        this.inss = (this.salario_bruto*inss)/100 
        let salariobruto = this.salario_bruto - this.inss;
        this.ir = (salariobruto*ir)/100
        let impostos = this.inss + this.ir
        let salarioliquido = this.salario_bruto - impostos
        return "Funcionária: " + this.nome + " Salário Bruto: "+ this.salario_bruto.toFixed(2) + " Impostos a serem pagos: " + impostos.toFixed(2)  + " Salário líquido: " + salarioliquido.toFixed(2)  ;
        
    }
    aumento(aumento: number){
        let novosalario = (this.salario_bruto*aumento)/100 
        this.salario_bruto = this.salario_bruto + novosalario
        return "Novo salário com 10% de aumento: " + this.salario_bruto 
    }
    taxas(inss: number, ir: number){
        this.inss = (this.salario_bruto*inss)/100
        let salarionovo = this.salario_bruto - this.inss;
        this.ir = (salarionovo*ir)/100;
        let taxas = this.inss + this.ir
        let salarioliquido = this.salario_bruto - taxas
        return "Funcionária: " + this.nome + " Salário Bruto: "+ this.salario_bruto + " Impostos a serem pagos: " + taxas.toFixed(2) + " Salário líquido: " + salarioliquido.toFixed(2)  ;
        
    }
    
}


let funcionario = new Funcionario("Ana Silva", "Analista de Vendas", 3000.00, 11, 7.5 );
let operario = new Funcionario("João Pedro", "Analista de Vendas", 5300.00, 11, 7.5 );

console.log(funcionario.impostos(11, 7.5));
console.log(funcionario.aumento(10));
console.log(funcionario.taxas(11, 7.5));

console.log(operario.impostos(11, 7.5));
console.log(operario.aumento(10));
console.log(operario.taxas(11, 7.5));



