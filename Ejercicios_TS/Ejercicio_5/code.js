/*
    Uso de clases, constructores, propiedades, métodos, let.
    Crea una clase con una variable pública de cada tipo y un constructor.
    Por último instancia un objeto de la clase.
*/
var Ejemplo = /** @class */ (function () {
    function Ejemplo(tipoNumero, tipoCadena, tipoBoolean) {
        this.tipoNumero = tipoNumero;
        this.tipoCadena = tipoCadena;
        this.tipoBoolean = tipoBoolean;
    }
    return Ejemplo;
}());
var miObjeto = new Ejemplo(123, "Hola", true);
console.log("Numero: " + miObjeto.tipoNumero + "\nCadena: " + miObjeto.tipoCadena + "\nBooleano: " + miObjeto.tipoBoolean);
