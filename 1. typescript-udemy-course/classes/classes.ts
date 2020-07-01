class Data {
    // Público padrão
    public dia: number
    mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(30, 11, 1971)
aniversario.dia = 29
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data // posso omitir os "()"
casamento.ano = 2017
console.log(casamento)

// Simplificação de sintaxe de Classe
class DataEsperta {
    constructor(
        public dia: number = 1,
        public mes: number = 1,
        public ano: number = 1970) {
    }
}

const aniversarioEsperto = new DataEsperta(30, 11, 1971)
aniversario.dia = 29
console.log(aniversario.dia)
console.log(aniversario)

const casamentoEsperto = new DataEsperta // posso omitir os "()"
casamento.ano = 2017
console.log(casamento)

// Modificadores de acesso
class Carro {
    private velocidadeAtual: number = 0

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) {

    }

    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima

        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }

        return this.velocidadeAtual
    }

    public acelerar(): number {
        return this.alterarVelocidade(5)
    }

    public frear(): number {
        return this.alterarVelocidade(-5)
    }
}

const carro1 = new Carro('Ford', 'Ka', 185)

Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(`\nVelocidade atual: ${carro1.acelerar()}`)

Array(20).fill(0).forEach(() => carro1.frear())
console.log(`Velocidade atual: ${carro1.frear()}`)

// Herança
class Ferrari extends Carro {

    constructor(modelo: string, velocidadeMaxima: number) {
        super('Ferrari', modelo, velocidadeMaxima)
    }

    public acelerar(): number {
        return this.alterarVelocidade(20)
    }

    public frear(): number {
        return this.alterarVelocidade(-15)
    }
}

const f40 = new Ferrari('F40', 324)
console.log(`${f40.marca} - ${f40.modelo}`)

console.log(f40.acelerar())
console.log(f40.acelerar())
console.log(f40.frear())

// Getters & Setters
class Pessoa {
    private _idade: number = 0

    public get idade(): number {
        return this._idade
    }

    public set idade(valor: number) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1.idade)

pessoa1.idade = -3
console.log(pessoa1.idade)

// Atributos e métodos estáticos
class Matematica {
    static PI: number = 3.1416

    static areaCirc(raio: number): number {
        // return this.PI * raio * raio
        return Matematica.PI * Math.pow(raio, 2)
    }
}

console.log(Matematica.areaCirc(4))

// Classe abstrata
abstract class Calculo {
    protected resultado: number = 0

    abstract executar(...numeros: number[]): void

    getResultado(): number {
        return this.resultado
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((total, atual) => total + atual)
    }
}

class Multiplica extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((total, atual) => total * atual)
    }
}

let c1: Calculo = new Soma()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

c1 = new Multiplica // "()" implícito.
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

// Construtor privado & Singleton
class Unico {
    private static instance: Unico = new Unico
    private constructor() { }

    static getInstance(): Unico {
        return Unico.instance
    }

    agora() {
        return new Date
    }
}

console.log(Unico.getInstance().agora())

// Somente leitura
class Aviao {
    public readonly modelo: string

    constructor(modelo: string, public readonly prefixo: string) {
        this.modelo = modelo
    }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')
// turboHelice.modelo = 'DC-8'
// turboHelice.prefixo = 'PT-DEF'
console.log(turboHelice)