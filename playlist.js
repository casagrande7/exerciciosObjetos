"use strict";
class Musica {
    constructor(titulo, artista, duracao) {
        this.titulo = titulo;
        this.artista = artista;
        this.duracao = duracao;
    }
}
class Playlist {
    constructor() {
        this.musicas = [];
        this.reproduzindo = false;
        this.indiceAtual = 0;
    }
    adicionarMusica(musica) {
        this.musicas.push(musica);
    }
    reproduzir() {
        if (this.musicas.length > 0) {
            this.reproduzindo = true;
            return "Reproduzindo" + this.musicas[this.indiceAtual].titulo + ' - ' + this.musicas[this.indiceAtual].artista;
        }
        else {
            return "A playlist está vazia";
        }
    }
    pausar() {
        if (this.reproduzindo == true) {
            this.reproduzindo = false;
            return "Música pausada";
        }
        else {
            return "Nenhuma música está sendo reproduzida";
        }
    }
    proxima() {
        if (this.musicas.length > 0) {
            this.indiceAtual = (this.indiceAtual + 1) % this.musicas.length;
            return this.reproduzir();
        }
        else {
            return "A Playlist está vazia";
        }
    }
}
