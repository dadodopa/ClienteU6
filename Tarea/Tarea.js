document.addEventListener('DOMContentLoaded', function () {
 
    const zonaDibujo = document.getElementById('zonadibujo');
    const paletaColores = document.querySelectorAll('#paleta td');
    const mensajeEstado = document.getElementById('mensaje-estado');
    
    let pincelActivo = false;
    let colorSeleccionado = ""; 

    
    const tabla = document.createElement('table');
    tabla.className = 'tablero'; 

    for (let i = 0; i < 30; i++) {
        const tr = document.createElement('tr');
        
        for (let j = 0; j < 30; j++) {
            const td = document.createElement('td');
            
            
            td.addEventListener('click', function() {
                togglePincel(td);
            });

            
            td.addEventListener('mouseover', function() {
                if (pincelActivo) {
                    pintarCelda(td);
                }
            });

            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
    
    
    zonaDibujo.appendChild(tabla);

    
    paletaColores.forEach(celdaColor => {
        celdaColor.addEventListener('click', function() {
            
            paletaColores.forEach(c => c.classList.remove('seleccionado'));
            
            
            this.classList.add('seleccionado');

            
            const clases = Array.from(this.classList);
            colorSeleccionado = clases.find(c => c !== 'seleccionado');
        });
    });

    

    function togglePincel(celda) {
        if (colorSeleccionado === "" || colorSeleccionado === undefined) {
            alert("¡Primero selecciona un color de la paleta!");
            return;
        }

        
        pincelActivo = !pincelActivo;

        
        if (pincelActivo) {
            mensajeEstado.textContent = "PINCEL ACTIVADO";
            pintarCelda(celda); 
        } else {
            mensajeEstado.textContent = "PINCEL DESACTIVADO";
        }
    }

    function pintarCelda(celda) {
        celda.className = ''; 
        
        
        celda.classList.add(colorSeleccionado);
    }
});