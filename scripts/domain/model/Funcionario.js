export default class Funcionario {

    #nome
    #salario

    getNome() { return this.#nome; }
    setNome(nome){ this.#nome = nome; }
    getSalario() { return this.#salario; }
    setSalario(salario) { this.#salario = salario; }

    addAumento(valor) { Number(this.#salario += valor); }
    ganhoAnual() { return this.#salario * 12; }

    exibeDados() {
        return `Seu nome é ${this.#nome}, \n
         Você recebe: ${this.#salario}, \n
         Com bonus, recebe ${this.addAumento()}, \n
         E seu ganho anual atualmente é: ${this.ganhoAnual()}, \n
        `
    }

    constructor(nome, salario){
        this.#nome = nome;
        this.#salario = salario;
    }
}