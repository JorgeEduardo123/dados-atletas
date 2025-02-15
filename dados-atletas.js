// Definição da classe Atleta
class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    // Método para calcular a categoria do atleta
    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) return "Infantil";
        if (this.idade >= 12 && this.idade <= 13) return "Juvenil";
        if (this.idade >= 14 && this.idade <= 15) return "Intermediário";
        if (this.idade >= 16 && this.idade <= 30) return "Adulto";
        return "Sem categoria";
    }

    // Método para calcular o IMC do atleta
    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }

    // Método para calcular a média válida do atleta
    calculaMediaValida() {
        // Ordena as notas em ordem crescente
        const notasOrdenadas = this.notas.slice().sort((a, b) => a - b);
        // Remove a menor e a maior nota
        const notasValidas = notasOrdenadas.slice(1, -1);
        // Calcula a média das notas válidas
        const soma = notasValidas.reduce((acc, nota) => acc + nota, 0);
        return soma / notasValidas.length;
    }

    // Métodos para obter informações do atleta
    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemNotasAtleta() {
        return this.notas;
    }

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return this.calculaIMC();
    }

    obtemMediaValida() {
        return this.calculaMediaValida();
    }
}

// Exemplo de uso
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log("Nome:", atleta.obtemNomeAtleta());
console.log("Idade:", atleta.obtemIdadeAtleta());
console.log("Peso:", atleta.obtemPesoAtleta());
console.log("Altura:", atleta.altura);
console.log("Notas:", atleta.obtemNotasAtleta().join(","));
console.log("Categoria:", atleta.obtemCategoria());
console.log("IMC:", atleta.obtemIMC());
console.log("Média válida:", atleta.obtemMediaValida());
