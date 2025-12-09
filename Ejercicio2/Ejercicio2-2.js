    // Obtener todos los formularios con getElementsByTagName
    const formularios = document.getElementsByTagName("form");

    // Último formulario
    const ultimoFormulario = formularios[formularios.length - 1];

    // Obtener todos los inputs del último formulario
    const inputs = ultimoFormulario.getElementsByTagName("input");

    // Buscar el último input de tipo texto
    let ultimoInputTexto = null;

    for (let i = inputs.length - 1; i >= 0; i--) {
        if (inputs[i].type === "text") {
            ultimoInputTexto = inputs[i];
            break; // lo encontramos, salimos del bucle
        }
    }

    // Si existe, colocamos el foco
    if (ultimoInputTexto) ultimoInputTexto.focus();