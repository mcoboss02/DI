/*
    Funciones de Flecha. Convertir esta función a una función flecha.
*/

function resultadoDoble(a,b){
    return (a+b) * 2
}

const funcion = (a:number,b:number):number => {
    return (a+b) * 2
}

console.log("Resultado: " + funcion(3,5))