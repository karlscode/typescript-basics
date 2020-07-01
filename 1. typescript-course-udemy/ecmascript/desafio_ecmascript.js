"use strict";
// Exercicio 1
// var dobro = function(valor) {
//     return valor * 2
// }
// console.log(dobro(10))
const dobro = (valor) => valor * 2;
console.log(`Dobro: 10 = ${dobro(10)}`);
// Exercicio 2
// var dizerOla = function (nome) {
//     if (nome === undefined) { nome = "Pessoa" }
//     console.log("Ola, " + nome)
// }
// dizerOla()
// dizerOla("Anna")
const dizerOla = (nome = 'Pessoa') => console.log(`Olá, ${nome}`);
dizerOla();
dizerOla('Anna');
// Exercicio 3
// Imprimir menor valor
// var nums = [-3, 33, 38, 5]
// console.log('???')
const nums = [-3, 33, 38, 5];
console.log(`Menor valor: ${Math.min(...nums)}`);
// Exercicio 4
// Adicionar todos os elementos de "nums" em array
// var array = [55, 20]
// console.log(array)
const array = [55, 20, ...nums];
console.log(`Elementos em array: ${array}`);
// Exercicio 5
// var notas = [8.5, 6.3, 9.4]
// var notas1 = notas[0]
// var notas2 = notas[1]
// var notas3 = notas[2]
// console.log(nota1, nota2, nota3)
const notas = [8.5, 6.3, 9.4];
const [notas1, notas2, notas3] = notas;
console.log(`
Nota 1: ${notas1}
Nota 2: ${notas2}
Nota 3: ${notas3}
`);
// Exercicio 6
// var cientista = { primeiroNome: "Will", experiencia: 12 }
// var primeiroNome = cientista.primeiroNome
// var experiencia = cientista.experiencia
// console.log(primeiroNome, experiencia)
const cientista = {
    primeiroNome: "Will",
    experiencia: 12
};
const { primeiroNome, experiencia } = cientista;
console.log(`Primeiro nome: ${primeiroNome}
Experiência: ${experiencia}`);
//# sourceMappingURL=desafio_ecmascript.js.map