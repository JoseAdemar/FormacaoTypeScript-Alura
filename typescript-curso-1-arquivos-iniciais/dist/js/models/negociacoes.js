export class Negociacaoes {
    constructor() {
        this.negociacoes = [];
        // Utilizando o spread operation
        //lista(): Array<Negociacao>{
        // return [...this.negociacoes];
        //}
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
