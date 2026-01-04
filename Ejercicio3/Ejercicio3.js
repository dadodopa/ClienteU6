

    // -----------------------------
    //   ARRAY DE DISCOS
    // -----------------------------
    let discos = [];

    // -----------------------------
    //   CREAR FORMULARIO DINÁMICO
    // -----------------------------

    const form = document.createElement("form");
    document.body.appendChild(form);

    function crearLabel(texto, forId) {
        const label = document.createElement("label");
        label.textContent = texto;
        label.setAttribute("for", forId);
        return label;
    }

    function crearInputTexto(id) {
        const input = document.createElement("input");
        input.type = "text";
        input.id = id;
        input.name = id;
        return input;
    }

    function crearP() {
        const p = document.createElement("p");
        p.style.color = "red";
        return p;
    }

    // Nombre
    const labelNombre = crearLabel("Nombre del disco:", "nombre");
    const inputNombre = crearInputTexto("nombre");
    const infoNombre = crearP();

    // Grupo
    const labelGrupo = crearLabel("Grupo/Cantante:", "grupo");
    const inputGrupo = crearInputTexto("grupo");
    const infoGrupo = crearP();

    // Año
    const labelYear = crearLabel("Año publicación:", "year");
    const inputYear = crearInputTexto("year");
    const infoYear = crearP();

    // Tipo de música
    const labelTipo = crearLabel("Tipo de música:", "tipo");
    const selectTipo = document.createElement("select");
    selectTipo.id = "tipo";
    selectTipo.innerHTML = `
        <option value="rock">Rock</option>
        <option value="pop">Pop</option>
        <option value="punk">Punk</option>
        <option value="indie">Indie</option>
    `;

    // Localización
    const labelLocal = crearLabel("Localización:", "local");
    const inputLocal = crearInputTexto("local");
    inputLocal.readOnly = true;
    inputLocal.value = "N/A";

    // Préstamo
    const labelPrestamo = crearLabel("Préstamo:", "prestamo");
    const inputPrestamo = crearInputTexto("prestamo");
    inputPrestamo.readOnly = true;
    inputPrestamo.value = "false";

    // Botón
    const boton = document.createElement("button");
    boton.type = "button";
    boton.textContent = "Añadir disco";

    // Añadir todo al form
    [
        labelNombre, inputNombre, infoNombre,
        labelGrupo, inputGrupo, infoGrupo,
        labelYear, inputYear, infoYear,
        labelTipo, selectTipo,
        labelLocal, inputLocal,
        labelPrestamo, inputPrestamo,
        boton
    ].forEach(el => form.appendChild(el));

    // -----------------------------
    //        VALIDACIONES
    // -----------------------------

    const MAXCADENA = 30;

    function validarTexto(campo, max, input, salida) {
        let value = input.value.trim();

        if (value.length === 0) {
            salida.textContent = `El campo '${campo}' está vacío.`;
            return false;
        }
        if (value.length > max) {
            salida.textContent = `El campo '${campo}' no puede superar ${max} caracteres.`;
            return false;
        }

        salida.textContent = "";
        return true;
    }

    function validarYear(input, salida) {
        let valor = input.value.trim();

        if (valor === "") {
            salida.textContent = "El año está vacío.";
            return false;
        }
        if (isNaN(Number(valor))) {
            salida.textContent = "Debe ser un número.";
            return false;
        }
        if (valor.length !== 4) {
            salida.textContent = "Debe tener 4 dígitos.";
            return false;
        }

        salida.textContent = "";
        return true;
    }

    // -----------------------------
    //    CREAR TABLA DINÁMICA
    // -----------------------------

    let tabla = null;

    function actualizarTabla(ultimoDisco) {

        if (tabla) tabla.remove();

        tabla = document.createElement("table");
        tabla.border = "1";
        tabla.style.marginTop = "20px";
        tabla.style.borderCollapse = "collapse";
        tabla.style.width = "600px";

        const header = document.createElement("tr");
        header.innerHTML = `
            <th>Nombre</th>
            <th>Grupo</th>
            <th>Año</th>
            <th>Tipo</th>
        `;
        tabla.appendChild(header);

        // Ordenar discos alfabéticamente (por nombre)
        discos.sort((a, b) => a.nombre.localeCompare(b.nombre));

        discos.forEach(disco => {
            const fila = document.createElement("tr");

            fila.innerHTML = `
                <td>${disco.nombre}</td>
                <td>${disco.grupo}</td>
                <td>${disco.year}</td>
                <td>${disco.tipo}</td>
            `;

            // Resaltar el último disco añadido
            if (disco === ultimoDisco) {
                fila.style.backgroundColor = "yellow";
                fila.style.fontWeight = "bold";
            }

            tabla.appendChild(fila);
        });

        document.body.appendChild(tabla);
    }

    // -----------------------------
    //       EVENTO BOTÓN
    // -----------------------------

    boton.addEventListener("click", () => {

        let okNombre = validarTexto("nombre", MAXCADENA, inputNombre, infoNombre);
        let okGrupo = validarTexto("grupo", MAXCADENA, inputGrupo, infoGrupo);
        let okYear = validarYear(inputYear, infoYear);

        if (!okNombre || !okGrupo || !okYear) return;

        // Crear objeto disco
        const nuevoDisco = {
            nombre: inputNombre.value.trim(),
            grupo: inputGrupo.value.trim(),
            year: inputYear.value.trim(),
            tipo: selectTipo.value
        };

        discos.push(nuevoDisco);

        actualizarTabla(nuevoDisco);

        // Vaciar formulario
        inputNombre.value = "";
        inputGrupo.value = "";
        inputYear.value = "";
        selectTipo.value = "rock";
    });


