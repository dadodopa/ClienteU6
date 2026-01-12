document.addEventListener('DOMContentLoaded', function () {
    // 1. Variables Globales
    const zonaDibujo = document.getElementById('zonadibujo');
    const paletaColores = document.querySelectorAll('#paleta td');
    const mensajeEstado = document.getElementById('mensaje-estado');
    
    let pincelActivo = false;
    let colorSeleccionado = ""; // Guardará la clase del color (ej: "color1")

    // 2. Generación del Tablero (30x30)
    const tabla = document.createElement('table');
    // Añadimos una clase para estilos si fuera necesario, aunque el CSS ataca por ID
    tabla.className = 'tablero'; 

    for (let i = 0; i < 30; i++) {
        const tr = document.createElement('tr');
        
        for (let j = 0; j < 30; j++) {
            const td = document.createElement('td');
            
            // Evento: Al hacer CLICK en una celda
            td.addEventListener('click', function() {
                togglePincel(td);
            });

            // Evento: Al pasar el MOUSE por encima
            td.addEventListener('mouseover', function() {
                if (pincelActivo) {
                    pintarCelda(td);
                }
            });

            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
    
    // Insertamos la tabla generada en el div
    zonaDibujo.appendChild(tabla);

    // 3. Lógica de la Paleta de Colores
    paletaColores.forEach(celdaColor => {
        celdaColor.addEventListener('click', function() {
            // Quitamos la clase 'seleccionado' de todos los colores
            paletaColores.forEach(c => c.classList.remove('seleccionado'));
            
            // Añadimos la clase 'seleccionado' al clickeado
            this.classList.add('seleccionado');

            // Obtenemos la clase de color (ej: "color1")
            // Nota: Asumimos que la celda tiene la clase del color y quizas 'seleccionado'.
            // Filtramos 'seleccionado' para quedarnos solo con el color.
            const clases = Array.from(this.classList);
            colorSeleccionado = clases.find(c => c !== 'seleccionado');
        });
    });

    // 4. Funciones Auxiliares

    function togglePincel(celda) {
        if (colorSeleccionado === "" || colorSeleccionado === undefined) {
            alert("¡Primero selecciona un color de la paleta!");
            return;
        }

        // Cambiamos el estado del pincel
        pincelActivo = !pincelActivo;

        // Actualizamos el mensaje
        if (pincelActivo) {
            mensajeEstado.textContent = "PINCEL ACTIVADO";
            pintarCelda(celda); // Pintamos la celda donde hicimos click inicial
        } else {
            mensajeEstado.textContent = "PINCEL DESACTIVADO";
        }
    }

    function pintarCelda(celda) {
        // Limpiamos cualquier clase de color previa que tuviera la celda
        celda.className = ''; 
        
        // Asignamos el nuevo color
        celda.classList.add(colorSeleccionado);
    }
});