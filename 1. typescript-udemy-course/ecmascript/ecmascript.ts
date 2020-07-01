// Arrow Function
function somar(n1: number, n2: number): number {
    return n1 + n2
}
console.log("Somar: " + somar(2, 2))

const subtrair = (n1: number, n2: number): number => n1 - n2
console.log("Subtrair: " + subtrair(2, 3))

const dividir = (n1: number, n2: number) => n1 / n2
console.log("Dividir: " + dividir(4, 2))

// Parâmetros padrão
function contagemRegressiva(inicio: number = 5,
    fim: number = inicio - 5): void {
    console.log(inicio)
    while (inicio > fim) {
        inicio--
        console.log(inicio)
    }
    console.log("Fim!\n")
}
contagemRegressiva()
contagemRegressiva(3)

// Spread & Rest
// Spread
const numbers = [1, 10, -5, 99]
console.log("Maior número: " + Math.max(...numbers))

// Rest
const turmaA: string[] = [' João', ' Pedro', ' Maria']
const turmaB: string[] = [' Marcela', ' Daniela', ...turmaA]
const turmaC: string[] = [' Viviane', ' Denize']
const turmas: string[] = [...turmaB, ...turmaC]
console.log("Lista de alunos: " + turmas)

// function retornaArray(...args: number[]): number[] {
//     return args
// }
const retornaArray = (...args: number[]): number[] => args
const numeros = retornaArray(1, 2, 3, 4, 5, 6)
console.log(numeros)
// Rest com Spread
console.log(retornaArray(...numbers))

// Rest com Spread (Tupla)
const tupla: [number, string, boolean] = [1, 'abc', false]

function tuplaParam1(a: number, b: string, c: boolean): void {
    console.log(`\nTupla\n1) ${a}, ${b}, ${c}`)
}
tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]) {
    console.log(`2) ${params[0]}, ${params[1]}, ${params[2]}`)
}
tuplaParam2(...tupla)

// Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020]
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]

const [motor, ano] = caracteristicas

console.log(motor)
console.log(ano)

// Destructuring (objeto)
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        w: 'Importado'
    }
}

const nomeItem = item.nome
const precoItem = item.preco
const caracteristicasItem = item.caracteristicas.w
console.log(nomeItem)
console.log(precoItem)
console.log(caracteristicasItem)

const { nome: n, preco, caracteristicas: { w } } = item
console.log("\n" + n)
console.log(preco)
console.log(w)