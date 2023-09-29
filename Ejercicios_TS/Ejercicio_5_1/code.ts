/*
    Más clases. 
    Crea una clase que permita manejar la siguiente estructura. 
    La clase se debe llamar rectángulo y debe tener dos propiedades: base y altura. 
    También un método que calcule el área = base x altura y debe retornar un número.
*/

class Rectangulo {
    base:number
    altura:number

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): number {
        return this.base*this.altura
    }
}