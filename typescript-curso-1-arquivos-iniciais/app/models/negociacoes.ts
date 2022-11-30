import { Negociacao } from "./negociacao";

export class Negociacaoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao>{
       return this.negociacoes;
   }

    // Utilizando o spread operation
    //lista(): Array<Negociacao>{
       // return [...this.negociacoes];
    //}
}
