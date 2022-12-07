import { Negociacao } from "./negociacao";

export class Negociacaoes {
    private negociacoes: Negociacao [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] {
       return this.negociacoes;
   }

    // Utilizando o spread operation
    //lista(): Array<Negociacao>{
       // return [...this.negociacoes];
    //}
}
