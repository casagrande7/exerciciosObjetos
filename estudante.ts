class Estudante{
    nome: string;
    idade: number;
    notas: number[];

    constructor(nome: string, idade: number, notas: number[]){
        this.nome = nome;
        this.idade = idade;
        this.notas = notas;
}

notasDosAlunos(){
    console.log("Minhas notas");

    let soma = 0;
    let media = 0;

    for(let i=0; i< this.notas.length; i++){
       soma = soma + this.notas[i] 
       
    }
    media = soma/ this.notas.length
    if(media>= 7){
        return "Parabéns, " + this.nome +"!" + " sua média é " + media + " e você está aprovada";
       
    } else{
        return this.nome,  + " sua média é " + media + " e você precisa estudar mais para melhorar seu desempenho";
    }
}   


}

let maria = new Estudante("Maria", 20, [8, 7.5, 9.2, 6.8, 9.5]);

console.log(maria.notasDosAlunos());
