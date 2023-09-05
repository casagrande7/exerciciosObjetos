class Evento{
    nome: string;
    data: string;
    horario: string;

    constructor(nome: string, data: string, horario: string){
        this.nome = nome;
        this.data = data;
        this.horario = horario;
    }
}
class Agenda{
    private eventos: Evento [] = [];



    constructor(){
    }

    adicionarEvento(evento: Evento){
        this.eventos.push(evento);
    }

    visualizarAgenda(){
        console.log("Eventos disponíveis");
        for(let i=0; i< this.eventos.length; i++){
            console.log(this.eventos[i].nome + " na data " + this.eventos[i].data + " ás " + this.eventos[i].horario);
        }
       
    }

    removerEvento(evento: Evento){
       this.eventos = this.eventos.filter((item) => item.nome !== evento.nome);
       
    }

}

const evento1 = new Evento("Halloween", "17/10/2023", "22:30");
const evento2 = new Evento("Casamento", "18/10/2023", "21:30");
const evento3 = new Evento("Carnaval", "19/10/2023", "20:30");


const minhaAgenda = new Agenda();
minhaAgenda.adicionarEvento(evento1);
minhaAgenda.adicionarEvento(evento2);
minhaAgenda.adicionarEvento(evento3);
minhaAgenda.removerEvento(evento1);
console.log(minhaAgenda.visualizarAgenda());




