class Produto{
    nome: string;
    valor: number;

    constructor(nome: string, valor: number ){
        this.nome = nome;
        this.valor = valor;
    }

    marketing(){
        return "O produto vendido é um " + this.nome + " que custa R$" + this.valor;
    }





}

let tenis = new Produto("Tênis", 350.00 );

console.log(tenis.marketing());
