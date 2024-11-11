class Heroi {
    // Construtor que inicializa o nome, idade e tipo
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método que exibe a mensagem de ataque dependendo do tipo
    atacar() {
        let ataque;

        // Verifica o tipo do herói e define o ataque correspondente
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "ataque desconhecido"; // Caso o tipo não seja reconhecido
        }

        // Exibe a mensagem de ataque
        console.log(`o ${this.tipo} atacou usando ${ataque})`);
    }
}