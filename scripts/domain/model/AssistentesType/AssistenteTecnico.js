import Assistente from "../Assistente.js";

export default class AssistenteTecnico extends  Assistente {
    #bonusSalario

    getBonusSalario() {return this.#bonusSalario;}
    setBonusSalario(bonusSalario) {this.#bonusSalario = bonusSalario;}

    ganhoAnual() {
        return this.calculateBonus() * 12;
    }

    calculateBonus() { return this.getSalario() + this.#bonusSalario;}

    exibeDados() {
        return `Seu nome é ${this.getNome()}, \n
         Seu número de Matrícula é: ${this.getNumeroMatricula()}
         Você recebe: ${this.calculateBonus()} contando com seu bonus de ${this.#bonusSalario}, \n
         E seu ganho anual atualmente é: ${this.ganhoAnual()}, \n
         `
    }

    

    constructor(nome, salario, numeroMatricula, bonusSalario) {
        super(nome, salario, numeroMatricula);
        this.#bonusSalario = bonusSalario;
    }
}