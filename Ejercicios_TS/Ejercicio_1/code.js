/*
   Uso de let y const.
   Crea una variable nombre ="[tu_nombre]", y una variable edad ="[tu_edad]".
   Por último crea una constante Personaje que le tenga dos atributos, nombre y edad y asignales los valores de las variables antes creadas.
*/
var nombre = "Manuel";
var edad = 20;
var Personaje = {
    nombre: nombre,
    edad: edad
};
console.log("Nombre: " + Personaje.nombre + "\nEdad: " + Personaje.edad);
