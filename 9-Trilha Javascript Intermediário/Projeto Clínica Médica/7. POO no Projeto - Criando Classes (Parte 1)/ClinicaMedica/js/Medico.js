export class Medico extends Pessoa {
    constructor(nome, idade, cpf, especialidade) {
        super(nome, idade, cpf);
        this.especialidade = especialidade;
    }
}