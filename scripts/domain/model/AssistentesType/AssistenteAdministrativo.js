import Assistente from "../Assistente.js";

export default class AssistenteAdministrativo extends Assistente {
    #turno

    getTurno() {return this.#turno}
    setTurno(turno) {this.#turno = turno;}

    verificarTurno() {
        if(this.getTurno() === 'noite') {
            const adicionalNoturno = 500;
            return this.getSalario() + adicionalNoturno;
        } else if(this.getTurno() === 'dia') {
            return this.getSalario();
        }
    }

    ganhoAnual() {
        return this.verificarTurno() * 12;
    }

    exibeDados() {
        return `Seu nome é ${this.getNome()}, \n
         Seu número de Matrícula é: ${this.getNumeroMatricula()} \n
         Você trabalha no turno: ${this.getTurno()} \n
         Você recebe: R$ ${this.verificarTurno()}, \n
         E seu ganho anual atualmente é: ${this.ganhoAnual()}, \n
        `
    }



    constructor(nome, salario, numeroMatricula, turno) {
        super(nome, salario, numeroMatricula);
        this.#turno = turno;
    }
}