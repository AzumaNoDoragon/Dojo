let mapa = new Map();

mapa.set("nome", "Carlos");
mapa.set("idade", 30)

console.log(`nome: ${mapa.get("nome")} \t Idade: ${mapa.get("idade")}`);

class Pessoa{
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() { `Olá! Meu nome é ${this.nome}` }
}

const p1 = new Pessoa("Ana", 25)