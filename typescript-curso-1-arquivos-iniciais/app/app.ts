import { Negociacao } from './models/Negociacao.js';

const negociacao = new Negociacao(new Date(), 100, 10);
console.log("Volume = ", negociacao.volume);



