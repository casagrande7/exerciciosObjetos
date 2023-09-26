abstract class Empregado {
    protected nome: string;
    protected salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    abstract calcularSalarioMensal(): number;

    salarioMensal(): void {
        console.log("Esse é o " + this.nome + " que trabalha na empresa Apple e ganha " + this.salario + " reais");
    }

}


class Gerente extends Empregado {
    constructor(nome: string, salario: number) {
        super(nome, salario);
    }
    calcularSalarioMensal(): number {
        let aumento;
        aumento = (this.salario * 10) / 100;
        let total;
        total = this.salario + aumento
        return total;
    }

}

class Desenvolvedor extends Empregado{
    constructor(nome: string, salario: number){
        super(nome, salario );
    }
    calcularSalarioMensal(): number {
        return this.salario
    }
}




const gerente = new Gerente("João", 5000);
gerente.salarioMensal();
console.log("Depois de 10% de bônus salarial: "  + gerente.calcularSalarioMensal());

const desenvolvedor = new Desenvolvedor("Pedro", 4500);
desenvolvedor.salarioMensal();  

