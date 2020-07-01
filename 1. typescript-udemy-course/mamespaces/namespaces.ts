namespace Geometria {
    export namespace Area {
        const PI = 3.14

        export function circunferencia(raio: number): number {
            return PI * Math.pow(raio, 2)
        }

        export function retangulo(base: number, altura: number): number {
            return base * altura
        }
        console.log(PI)
    }
}

const PI = 2.99

console.log(Geometria.Area.circunferencia(10))
console.log(Geometria.Area.retangulo(10, 20))

console.log(PI)