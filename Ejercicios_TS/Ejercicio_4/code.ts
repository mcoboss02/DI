/*
    Parámetros obligatorios, opcionales y por defecto. 
    Crear una función flecha con parámetros obligatorios, opcionales y por defecto. 
    Definir: NOMBRE=obligatorio; PODER=opcional y ARMA= por defecto="arco"
*/

const funcion_2 = (nombre:String, poder?:Number, arma:String="arco") => {
    console.log("Nombre: " + nombre + "\nPoder: " + poder + "\nArma: " + arma);
}

console.log(funcion_2("Manuel"));
console.log(funcion_2("Pepe", 5));
console.log(funcion_2("Jose", 8, "flecha"));