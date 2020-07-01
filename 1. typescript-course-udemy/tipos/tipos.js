"use strict";
// STRING 
let nome = 'João';
console.log(nome);
// nome = 28
// NUMBERS
let idade = 27;
// idade = 'ana'
idade = 27.5;
console.log(idade);
// BOOLEAN
let possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
// TIPOS EXPLÍCITOS
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = '27'
// ARRAY
let hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[1]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100
console.log(hobbies);
// TUPLAS
let endereco = ["Av. Principal", 99, ""];
console.log(endereco);
endereco = ["Rua importante", 1260, "Bloco C"];
console.log(endereco);
// ENUM
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log("Verde: " + minhaCor);
console.log("Azul: " + Cor.Azul);
console.log("Laranja: " + Cor.Laranja, " Amarelo: " + Cor.Amarelo);
console.log("Verde: " + Cor.Verde, " Vermelho: " + Cor.Vermelho);
// ANY
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
// FUNÇÕES
function retornaMeuNome() {
    // return minhaIdade
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    // return minhaIdade
    console.log('Oi');
}
digaOi();
function mutiplicar(numA, numB) {
    return numA * numB;
}
// console.log(mutiplicar(2,'Bia')
console.log(mutiplicar(4.7, 9));
// TIPO FUNÇÃO
let calculo;
calculo = mutiplicar;
console.log("Cálculo: " + calculo(5, 6));
// OBJETOS
let usuario = {
    nome: 'João',
    idadeUsuario: 27
};
console.log("Dados do cliente: \nNome:" + usuario.nome
    + "\nIdade: " + usuario.idadeUsuario);
// EXERCÍCIO
let funcionario = {
    nomeSupervisores: ['Antônio', 'Carlos', 'Marcelo'],
    baterPonto(horas) {
        if (horas <= 8) {
            return 'Ponto normal!';
        }
        else {
            return 'Fora do horário!';
        }
    }
};
console.log("# Dados dos funcionários #"
    + "\nNome: " + funcionario.nomeSupervisores[0]
    + "\nPonto: " + funcionario.baterPonto(5));
console.log("\nNome: " + funcionario.nomeSupervisores[1]
    + "\nPonto: " + funcionario.baterPonto(10));
let funcionario1 = {
    nomeSupervisores: ['Antônio', 'Carlos', 'Marcelo'],
    baterPonto(horas) {
        if (horas <= 8) {
            return 'Ponto normal!';
        }
        else {
            return 'Fora do horário!';
        }
    }
};
let funcionario2 = {
    nomeSupervisores: ['Marcos', 'Daniela'],
    baterPonto(horas) {
        if (horas <= 8) {
            return 'Ponto normal!';
        }
        else {
            return 'Fora do horário!';
        }
    }
};
console.log("\n# Dados do funcionário 1 #"
    + "\nNome: " + funcionario1.nomeSupervisores[0]
    + "\nPonto: " + funcionario1.baterPonto(5));
console.log("\nNome: " + funcionario1.nomeSupervisores[1]
    + "\nPonto: " + funcionario1.baterPonto(10));
console.log("\n# Dados do funcionário 2 #"
    + "\nNome: " + funcionario2.nomeSupervisores[0]
    + "\nPonto: " + funcionario2.baterPonto(5));
console.log("\nNome: " + funcionario2.nomeSupervisores[1]
    + "\nPonto: " + funcionario2.baterPonto(10));
// UNION TYPES
let nota = 10;
console.log(`Minha nota é: ${nota}! - ` + typeof nota);
nota = '10';
console.log(`Minha nota é: ${nota}! - ` + typeof nota);
// NEVER
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: "Sabão",
    preco: 1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter nome!');
        }
        if (this.preco <= 0) {
            falha('Preço inválido!');
        }
    }
};
produto.validarProduto();
const contato1 = {
    nome: 'Fulano',
    tel1: '465465',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['36546353', '83213513']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map