// Array inicial de tareas
        let tareas = [
            { texto: "Estudiar JavaScript", realizada: false },
            { texto: "Hacer la compra", realizada: true },
            { texto: "Pasear al perro", realizada: false }
        ];

        const listaTareas = document.getElementById("listaTareas");
        const inputNueva = document.getElementById("nuevaTarea");
        const btnAgregar = document.getElementById("btnAgregar");

        // Función para mostrar las tareas en pantalla
        function mostrarTareas() {
            listaTareas.innerHTML = ""; // Limpia el contenedor

            tareas.forEach((tarea, index) => {
                const divTarea = document.createElement("div");
                divTarea.classList.add("tarea");

                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.checked = tarea.realizada;

                const spanTexto = document.createElement("span");
                spanTexto.textContent = tarea.texto;

                // Añadimos la clase realizada si corresponde
                if (tarea.realizada) {
                    spanTexto.classList.add("realizada");
                }

                // Evento para cambiar estado de la tarea
                checkbox.addEventListener("change", () => {
                    tarea.realizada = checkbox.checked;
                    mostrarTareas(); // Volvemos a pintar
                });

                divTarea.appendChild(checkbox);
                divTarea.appendChild(spanTexto);
                listaTareas.appendChild(divTarea);
            });
        }

        // Agregar nueva tarea
        btnAgregar.addEventListener("click", () => {
            const texto = inputNueva.value.trim();
            if (texto === "") return;

            tareas.push({ texto: texto, realizada: false });
            inputNueva.value = "";
            mostrarTareas();
        });

        // Cargar lista inicial
        mostrarTareas();