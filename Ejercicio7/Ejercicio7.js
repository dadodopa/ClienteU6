let edificios=[]
function crearEdificio(direccion, plantas, puertas) {
    edificios.forEach(edificio => {
        if(edificio.esIgual(direccion)){
            return
        }
    });
}
class Edificio {

    constructor(direccion, plantas, puertas) {
        this.direccion=direccion
        this.plantas=plantas
        this.puertas=puertas
    }
    esIgual(direccion){
        if(this.direccion==direccion){
            return true
        } else false
    }
}