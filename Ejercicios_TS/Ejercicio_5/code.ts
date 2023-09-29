/*
    Uso de clases, constructores, propiedades, métodos, let. 
    Crea una clase con una variable pública de cada tipo y un constructor. 
    Por último instancia un objeto de la clase.
*/

class Ejemplo {
    tipoNumero:Number
    tipoCadena:String
    tipoBoolean:boolean

    constructor(tipoNumero:Number, tipoCadena:String, tipoBoolean:boolean){
        this.tipoNumero = tipoNumero
        this.tipoCadena = tipoCadena
        this.tipoBoolean = tipoBoolean
    }
}

const miObjeto = new Ejemplo(123, "Hola", true)
console.log("Numero: " + miObjeto.tipoNumero + "\nCadena: " + miObjeto.tipoCadena + "\nBooleano: " + miObjeto.tipoBoolean);