let edificios=[]

document.getElementById("crearEdificio").addEventListener("click", function () {
    
    const direccion = document.getElementById("direccionEdificio").value
    const plantas = document.getElementById("plantasEdificio").value
    const puertas = document.getElementById("puertasEdificio").value

    //Creación de las plantas
    //Primero creamos el array donde estan las plantas
    const plantasArray=[]
    //Creamos el número de plantas que nos de el usuario con un bucle
    for (let index = 0; index < plantas; index++) {
        //Añadimos un array de puertas a cada planta
        const puertasArray=[]
        for (let j = 0; j < puertas; j++) {
            //Añadimos a cada puerta que está vacia
            puertasArray.push("Vacío")
        }
        //Añadimos ese array de puertas a la planta y se repite tanto como numero de plantas que hay
        plantasArray.push(puertasArray)
    }

    let edificio=new Edificio(direccion, plantasArray)
    edificios.push(edificio)
    console.log(edificios)
})

class Edificio {
    constructor(direccion) {
        this.direccion=direccion;
        this.plantas=[];
    }
}
