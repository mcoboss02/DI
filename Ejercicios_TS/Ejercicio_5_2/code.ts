/*
    Partimos de lo anterior. 
    A partir del ejercicio anterior se deben sacar 2 clases con una padre, de la cual heredar factores comunes. 
    Se deberán crear la clase rectángulo (modifica el nombre, porque ya lo tenemos creado) y la clase triángulo 
    que heredan de figura y ambas tendrán un método para calcular el área.
*/

// TO-DO
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