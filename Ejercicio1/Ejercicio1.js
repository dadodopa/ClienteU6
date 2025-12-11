// ================
// Clase Tarea
// ================
class Tarea {
    constructor(texto, realizada = false) {
        this.texto = texto;
        this.realizada = realizada;
    }

    toggle() {
        this.realizada = !this.realizada;
    }
}

// ================
// Clase Gestor de Tareas
// ================
class GestorTareas {
    constructor(listaTareas, inputNueva, btnAgregar) {
        this.listaTareas = listaTareas;
        this.inputNueva = inputNueva;
        this.btnAgregar = btnAgregar;

        this.tareas = [
            new Tarea("Estudiar JavaScript", false),
            new Tarea("Hacer la compra", true),
            new Tarea("Pasear al perro", false)
        ];

        // Eventos
        this.btnAgregar.addEventListener("click", () => this.agregarTarea());
        this.mostrarTareas();
    }

    // Mostrar tareas en pantalla
    mostrarTareas() {
        this.listaTareas.innerHTML = "";

        this.tareas.forEach((tarea) => {
            const divTarea = document.createElement("div");
            divTarea.classList.add("tarea");

            // Checkbox
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = tarea.realizada;
            checkbox.addEventListener("change", () => {
                tarea.toggle();
                this.mostrarTareas();
            });

            const spanTexto = document.createElement("span");
            spanTexto.textContent = tarea.texto;
            if (tarea.realizada) spanTexto.classList.add("realizada");

            divTarea.appendChild(checkbox);
            divTarea.appendChild(spanTexto);

            this.listaTareas.appendChild(divTarea);
        });
    }

    // Agregar una tarea
    agregarTarea() {
        const texto = this.inputNueva.value.trim();
        if (texto === "") return;

        this.tareas.push(new Tarea(texto));
        this.inputNueva.value = "";
        this.mostrarTareas();
    }

    // Eliminar una tarea
    eliminarTarea(indice) {
        this.tareas.splice(indice, 1);
        this.mostrarTareas();
    }
}

// ================
// Inicialización
// ================
const gestor = new GestorTareas(
    document.getElementById("listaTareas"),
    document.getElementById("nuevaTarea"),
    document.getElementById("btnAgregar")
);
