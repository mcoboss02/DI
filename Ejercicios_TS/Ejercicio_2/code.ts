/*
    Interfaces para validar objetos. 
    Crea una interface denominada LigaJusticia que tenga dos atributos, nombre y artesMarciales y
    declara una variable de tipo LigaJustica que de valores a esa Interface.
*/

interface LigaJusticia {
    nombre: string;
    artesMarciales: string[]
}
  
const miembroLiga: LigaJusticia = {
    nombre: "Superman",
    artesMarciales: ["Judo", "Boxeo", "Vuelo"]
};

console.log("Nombre: " + miembroLiga.nombre + "\nArtes marciales: " + miembroLiga.artesMarciales)