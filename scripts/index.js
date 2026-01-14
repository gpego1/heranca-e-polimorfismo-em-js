import AssistenteTecnico from "./domain/model/AssistentesType/AssistenteTecnico.js";
import AssistenteAdministrativo from "./domain/model/AssistentesType/AssistenteAdministrativo.js";
const nome = document.getElementById('nome');
const salario = document.getElementById('salario');
const formulario = document.getElementById('form');
const tipo = document.getElementById('tipo');
const turnos = document.getElementById('turnos');
const tipoTurno  = document.getElementById('turno');
const stylesTurnos = window.getComputedStyle(turnos);


// const gerarNumeroMatricula = crypto.randomUUID().toString();

tipo.addEventListener('click', e => {
    e.preventDefault();
    try {
        if (tipo.value === 'assistenteAdm') {
            turnos.classList.remove('hidden-display');
        } else {
            turnos.classList.add('hidden-display');
        }
    } catch(e) {
        console.log(e);
    }
})

formulario.addEventListener('submit', e => {
    e.preventDefault();
    try {
        if(tipo.value === 'assistenteTec' ) {
            const assistente = new AssistenteTecnico(nome.value, Number(salario.value), crypto.randomUUID().toString(), 500);
            console.log(assistente.exibeDados());
        } else if (tipo.value === 'assistenteAdm' ) {
            const assistente = new AssistenteAdministrativo(nome.value, Number(salario.value), crypto.randomUUID().toString(), tipoTurno.value);
            console.log(assistente.exibeDados());
        }
    } catch (e) {
        console.log(e);
    }


})