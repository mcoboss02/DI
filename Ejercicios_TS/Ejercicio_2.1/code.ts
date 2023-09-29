/*
    Más interfaces. 
    Crea una interface animal que tenga los atributos tipo, característica y tamanio.
*/

interface Animal {
    tipo: string,
    caracteristicas: string[],
    tamanio: number
}

const burro: Animal = {
    tipo: "Mamífero",
    caracteristicas: ["Fuerte", "Insensible"],
    tamanio: 310
}

console.log(burro.tipo);
console.log(burro.tamanio);
console.log(burro.caracteristicas);
