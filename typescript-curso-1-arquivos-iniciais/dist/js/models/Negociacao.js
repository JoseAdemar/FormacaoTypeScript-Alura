export class Negociacao {
    #data;
    #valor;
    #quantidade;

    constructor(data,valor,quantidade){
        this.#data = data;
        this.valor =valor;
        this.quantidade = quantidade;
    }

    get data(){
        return this.#data;
    }

    get valor(){
        return this.#valor;
    }

    get quantidade(){
        return this.#valor;
    }

    get volume(){
        this.#quantidade * this.#valor;
    }
}