    // Seleccionar TODOS los formularios de la página
    const formularios = document.querySelectorAll("form");

    // Seleccionar el último formulario
    const ultimoFormulario = formularios[formularios.length - 1];

    // Seleccionar todos los inputs tipo texto dentro del último formulario
    const inputsTexto = ultimoFormulario.querySelectorAll("input[type='text']");

    // Colocar el foco en el último input
    inputsTexto[inputsTexto.length - 1].focus();