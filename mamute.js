"use strict";
class Mamute {
    constructor(nome, raca, idade) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }
    apresentar() {
        return "Oi, eu sou" + this.nome + " um" + this.raca + " de " + this.idade + " anos ";
    }
    apresentarPara(humano) {
        return "Olá, " + humano + " satisfação em conhece-lo, sou " + this.nome + " um " + this.raca + " de " + this.idade + " anos ";
    }
}
let rex = new Mamute(" Rex", " Mammuthus-columbi ", 2);
let zeus = new Mamute(" Zeus", " Mammuthus-exilis ", 4);
let thor = new Mamute("Thor", "Mamute-ancestral", 9);
console.log(rex.nome);
console.log(zeus.nome);
console.log(thor.nome);
console.log(rex.apresentar());
console.log(zeus.apresentar());
console.log(thor.apresentarPara('João Pedro'));
