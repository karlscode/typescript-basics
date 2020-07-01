"use strict";
// Desafio Classe Pruduto
// Atributos: nome, preco e desconto
// Criar o construtor
// Obs 1.: Desconto é opcional (valor padrão 0)
// Obs 2.: Criar dois ou três produtos: passando dois ou três params
// Criar método precoComDesconto
// Quais são os parâmetros e o retorno?
// Alterar método resumo para mostrar o preco com desconto
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `Nome: ${this.nome} \nPreço: R$ ${this.preco} \nDesconto: ${this.desconto * 100}% off \nPreço com Desconto: ${this.precoComDesconto().toFixed(2)}`;
    }
    precoComDesconto() {
        // return this.preco - (this.preco * this.desconto)
        return this.preco * (1 - this.desconto);
    }
}
const produto1 = new Produto('Iphone XS Max', 5000, 0.1);
const produto2 = new Produto('Teclado MX', 255.9, 0.15);
const produto3 = new Produto('Mouse XD', 20.5);
produto3.desconto = 0.1;
console.log(`Produto 1: 
Nome: ${produto1.nome}
Preço: ${produto1.preco}
Desconto: ${produto1.desconto * 100}% 
Preço com Desconto: ${produto1.precoComDesconto().toFixed(2)}
Preço alterado?: ${produto1.preco}\n`);
console.log(`${produto2.resumo()} \n`);
console.log(produto3.resumo());
// DESAFIO 2
// Exercício 1 - Classe
// function Moto(nome) {
//     this.nome = nome
//     this.velocidade = 0
//     this.buzinar = function () {
//         console.log('Toooooooooot!')
//     }
//     this.acelerar = function (delta) {
//         this.velocidade = this.velocidade + delta
//     }
// }
// var moto = new Moto('Ducati')
// moto.buzinar()
// console.log(moto.velocidade)
// moto.acelerar(30)
// console.log(moto.velocidade)
class Moto {
    constructor(nome, velocidade = 0) {
        this.nome = nome;
        this.velocidade = velocidade;
    }
    buzinar() {
        return 'Toooooooooot!';
    }
    acelerar(delta) {
        return this.velocidade += delta;
    }
}
console.log('\nEXERCÍCIO - 1');
const moto = new Moto('Ducati');
console.log(`Moto: ${moto.nome}`);
console.log(`Buzina: ${moto.buzinar()}`);
console.log(`Velocidade: ${moto.velocidade}`);
moto.acelerar(30);
console.log(`Velocidade: ${moto.velocidade}`);
// Exercício 2 - Herança
// var objeto2D = {
//     base: 0,
//     altura: 0
// }
// var retangulo = Object.create(objeto2D)
// retangulo.base = 5
// retangulo.altura = 7
// retangulo.area = function () {
//     return this.base * this.altura
// }
// console.log(retangulo.area())
class Objeto2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Objeto2D {
    area() {
        return this.base * this.altura;
    }
}
console.log('\nEXERCÍCIO - 2');
const retangulo = new Retangulo(5, 7);
console.log(`Área retângulo: ${retangulo.area()}`);
// Exercício 3 - Getters & Setters
// var estagiario = {
//     _primeiroNome: ''
// }
// Object.defineProperty(estagiario, 'primeiroNome', {
//     get: function () {
//         return this._primeiroNome
//     },
//     set: function (valor) {
//         if (valor.length >= 3) {
//             this._primeiroNome = valor
//         } else {
//             this._primeiroNome = ''
//         }
//     },
//     enumerable: true,
//     configurable: true
// })
class Estagiario {
    constructor(_primeiroNome = '-') {
        this._primeiroNome = _primeiroNome;
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
    }
}
console.log('\nEXERCÍCIO - 3');
const estagiario = new Estagiario;
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
//# sourceMappingURL=desafio_classes.js.map