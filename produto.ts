class Produto{
    nome: string;
    valor: number;

    constructor(nome: string, valor: number ){
        this.nome = nome;
        this.valor = valor;
    }
    marketing(){
        return "O produto vendido é um " + this.nome + " que custa R$ " + this.valor;
    }
    desconto(a: number){
        return "Desconto de 20% aplicado, Novo valor: R$ "+(this.valor-(a*this.valor)/100);
        
    }
}

let tenis = new Produto("Tênis", 350.00 );
let iphone = new Produto("Iphone Pro Max 11", 5000.00);
let notebook = new Produto("Notebook Samsung Book i5", 3000.00);

console.log(tenis.marketing());
console.log(tenis.desconto(20));


console.log(iphone.marketing());
console.log(iphone.desconto(20));


console.log(notebook.marketing());
console.log(notebook.desconto(20));





