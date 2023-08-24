"use strict";
class Pessoa {
    constructor(nome, idade, comidas) {
        this.nome = nome;
        this.idade = idade;
        this.comidas = comidas;
    }
    comprimentar() {
        let habilitacao = "Já posso tirar minha CNH";
        if (this.idade < 18) {
            habilitacao = "Não posso tirar minha CNH";
        }
        return "Olá meu nome é " + this.nome + ", tenho " + this.idade + " anos, " + habilitacao + ".";
    }
    comidaFavorita() {
        console.log("Minha(s) comida(s) favorita(s)");
        for (let i = 0; i <= this.comidas.length; i++) {
            console.log(this.comidas[i]);
            console.log(joao.comprimentar());
        }
    }
}
let joao = new Pessoa("João Pedro", 19, ["Lasanha", "Churrasco", "Carne", "Frango"]);
console.log(joao.comprimentar());
