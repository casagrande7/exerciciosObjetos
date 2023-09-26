const pessoa = new class{
    private primeiroNome = "José";
    private ultimoNome = " da Silva";
    getNomeCompleto(){
        return this.primeiroNome + "" +  this.ultimoNome;
    }
}
console.log(pessoa.getNomeCompleto());

//* Outra maneira de fazer
const pessoa2 = {
    primeiroNome: "José",
    ultimoNome: " da Silva",
    getNomeCompleto: function(){
        return this.primeiroNome + "" +  this.ultimoNome;
    }
}
console.log(pessoa2.getNomeCompleto());

//* Outro jeito de fazer
const treinadorPessoal = new class{
    private rotina: {nome: string, duracao: number }[] = [];
    adicionarExercicios(nome: string, duracao: number ): void{
        this.rotina.push({nome,duracao});
    }

    calcularTempoTotal():number{
        // Desclarando variável para totalizar a duração
        let soma = 0;
        this.rotina.forEach(item => {
            soma = soma + item.duracao
        });
        return soma;
    }
}
treinadorPessoal.adicionarExercicios("Corrida", 30);
treinadorPessoal.adicionarExercicios("Flexões", 15);
treinadorPessoal.adicionarExercicios("Agachamentos", 20);
console.log("Tempo total necessário para a rotina: " + treinadorPessoal.calcularTempoTotal() + " em minutos");