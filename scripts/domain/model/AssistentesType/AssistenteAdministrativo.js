import Assistente from "../Assistente.js";

export default class AssistenteAdministrativo extends Assistente {
    #turno

    verificarTurno() {
        if(this.#turno === 'noite') {
            const adicionalNoturno = 500;
            return this.getSalario() + adicionalNoturno;
        } else {
            return this.getSalario();
        }
    }

    ganhoAnual() {
        return this.verificarTurno() * 12;
    }

    exibeDados() {
        return `Seu nome é ${this.getNome()}, \n
         Seu número de Matrícula é: ${this.getNumeroMatricula()} \n
         Você trabalha no turno: ${this.#turno} \n
         Você recebe: R$ ${this.verificarTurno()}, \n
         E seu ganho anual atualmente é: ${this.ganhoAnual()}, \n
        `
    }



    constructor(nome, salario, numeroMatricula, turno) {
        super(nome, salario, numeroMatricula);
        this.#turno = turno;
    }
}