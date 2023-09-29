/*
    Parámetros obligatorios, opcionales y por defecto.
    Crear una función flecha con parámetros obligatorios, opcionales y por defecto.
    Definir: NOMBRE=obligatorio; PODER=opcional y ARMA= por defecto="arco"
*/
var funcion_2 = function (nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    console.log("Nombre: " + nombre + "\nPoder: " + poder + "\nArma: " + arma);
};
console.log(funcion_2("Manuel"));
console.log(funcion_2("Pepe", 5));
console.log(funcion_2("Jose", 8, "flecha"));
