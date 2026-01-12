let edificios = [];
const listaEdificios = document.querySelector(".listaEdificios");
let edificioSeleccionado = null;
let edificioselect= null;
const select = document.getElementById("selectEdificios");

document.getElementById("crearEdificio").addEventListener("click", function () {
    const direccion = document.getElementById("direccionEdificio").value;
    const plantas = document.getElementById("plantasEdificio").value;
    const puertas = document.getElementById("puertasEdificio").value;
    listaEdificios.innerHTML = "";
    select.innerHTML = "";
    let edificio = new Edificio(direccion, plantas, puertas);
    edificios.push(edificio);
    edificios.forEach(function (edificio, index) {
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "edificio";
        radio.value = index;
        radio.id = "edificio" + index;
        radio.addEventListener("change", function () {
            edificioSeleccionado = index;
            console.log("Edificio seleccionado:" + edificio.direccion);
            console.log(
                "Index de edificio seleccionado: " + edificioSeleccionado
            );
        });
        const label = document.createElement("label");
        label.setAttribute("for", "edificio" + index);
        label.textContent = edificio.direccion;
        const br = document.createElement("br");
        const option = document.createElement("option");
        option.textContent = edificio.direccion;
        option.value = index;

        select.appendChild(option);
        listaEdificios.appendChild(radio);
        listaEdificios.appendChild(label);
        listaEdificios.appendChild(br);
    });

    console.log(edificios);
});
const addPropietario = document.getElementById("addInformacion");
addPropietario.addEventListener("click", function () {
    const planta = parseInt(document.getElementById("plantaInformacion").value);
    const puerta = parseInt(document.getElementById("puertaInformacion").value);
    const propietario = document.getElementById("propietarioInformacion").value;
    if (edificioSeleccionado === null) {
        alert("Selecciona un edificio");
        return;
    } else {
        edificios[edificioSeleccionado].plantas[planta][puerta] = propietario;
    }
    console.log(edificios[edificioSeleccionado].plantas[planta][puerta]);
});
const mostrarTabla = document.getElementById("mostrarEdificio");

mostrarTabla.addEventListener("click", function () {
    const edificioTabla = edificios[parseInt(selectEdificios.value)];
    const contenedorTabla = document.getElementById("tabla");
    contenedorTabla.innerHTML = ""; // Limpiar tabla anterior

    const tabla = document.createElement("table");

    edificioTabla.plantas.forEach((plantasFila, plantaIndex) => {
        const tr = document.createElement("tr");

        // Celda del índice de la planta
        const tdIndice = document.createElement("td");
        tdIndice.textContent = `Planta ${plantaIndex}`;
        tdIndice.style.fontWeight = "bold"; 
        tr.appendChild(tdIndice);

        plantasFila.forEach((propietario, puertaIndex) => {
            const td = document.createElement("td");
            td.textContent = propietario || "Vacío";

            td.addEventListener("click", function () {
                // Si ya hay un input dentro, no hacer nada para evitar duplicados
                if (td.querySelector("input")) return;

                const input = document.createElement("input");
                input.type = "text";
                input.value = td.textContent === "Vacío" ? "" : td.textContent;
                
                td.textContent = "";
                td.appendChild(input);
                input.focus();

                // Guardar al presionar Enter
                input.addEventListener("keydown", function (e) {
                    if (e.key === "Enter") {
                        const nuevoPropietario = input.value.trim();
                        // Actualizamos el array original de datos
                        edificioTabla.plantas[plantaIndex][puertaIndex] = nuevoPropietario;
                        td.textContent = nuevoPropietario || "Vacío";
                    }
                });

                // Opcional: Guardar también cuando el usuario hace clic fuera (blur)
                input.addEventListener("blur", function () {
                    if (td.contains(input)) {
                        td.textContent = edificioTabla.plantas[plantaIndex][puertaIndex] || "Vacío";
                    }
                });
            });

            tr.appendChild(td);
        });

        tabla.appendChild(tr);
    });

    contenedorTabla.appendChild(tabla);
});


class Edificio {
    constructor(direccion, plantas, puertas) {
        this.direccion = direccion;

        //Creación de las plantas
        //Primero creamos el array donde estan las plantas
        const plantasArray = [];
        //Creamos el número de plantas que nos de el usuario con un bucle
        for (let index = 0; index < plantas; index++) {
            //Añadimos un array de puertas a cada planta
            const puertasArray = [];
            for (let j = 0; j < puertas; j++) {
                //Añadimos a cada puerta que está vacia
                puertasArray.push("Vacío");
            }
            //Añadimos ese array de puertas a la planta y se repite tanto como numero de plantas que hay
            plantasArray.push(puertasArray);
        }
        this.plantas = plantasArray;
    }
}
