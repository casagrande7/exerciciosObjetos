class Musica{
    titulo: string;
    artista: string;
    duracao: number;
    
    constructor(titulo: string, artista: string, duracao: number){
        this.titulo = titulo;
        this.artista = artista;
        this.duracao = duracao;
    }
}
 class Playlist{
    private musicas: Musica[] = [];
    private reproduzindo: boolean = false;
    private indiceAtual: number = 0;

    constructor (){
    }

    adicionarMusica(musica: Musica){
        this.musicas.push(musica)  
    }

    reproduzir(){
        if(this.musicas.length > 0){

        }
        else{
            return "A playlist está vazia";
        }
    }

    
 }
