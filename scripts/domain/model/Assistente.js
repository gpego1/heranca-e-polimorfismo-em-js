import Funcionario from "./Funcionario.js";

export default class Assistente extends Funcionario{
    #numeroMatricula

    getNumeroMatricula(){return this.#numeroMatricula;}
    setNumeroMatricula(numeroMatricula){this.#numeroMatricula=numeroMatricula;}

    exibeDados(){ return `Seu nome é ${this.getNome()}, \n
         Seu número de Matrícula é: ${this.#numeroMatricula}
         Você recebe: ${this.getSalario()}, \n
         E seu ganho anual atualmente é: ${this.ganhoAnual()}, \n
        `}

    constructor(nome, salario, numeroMatricula) {
        super(nome, salario);
        this.#numeroMatricula = numeroMatricula;
    }

    // Administrativo = Turno (dia ou noite) se noturno, deve conter adicionalNoturno()
    // Técnico = possuem um bonusSalarial
}