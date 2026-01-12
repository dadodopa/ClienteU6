document.addEventListener('DOMContentLoaded', () => {
    const imagenInput = document.getElementById('imagen');
    const cargarImagenBtn = document.getElementById('cargarImagen');
    const gallery = document.getElementById('gallery');

    cargarImagenBtn.addEventListener('click', () => {
        const files = imagenInput.files; // Obtener los archivos seleccionados

        if (files.length === 0) {
            alert('Por favor, selecciona al menos una imagen para cargar.');
            return;
        }

        for (const file of files) {
            if (file.type.startsWith('image/')) {
                const imageUrl = URL.createObjectURL(file); // Crea una URL para la imagen

                // Crear el contenedor para la imagen y el botón
                const imageItem = document.createElement('div');
                imageItem.classList.add('image-item');

                // Crear el elemento de imagen
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = 'Imagen cargada';

                // Crear el botón de eliminación
                const deleteButton = document.createElement('button');
                deleteButton.classList.add('delete-button');
                deleteButton.textContent = 'X';
                
                // Añadir evento al botón para eliminar la imagen
                deleteButton.addEventListener('click', () => {
                    gallery.removeChild(imageItem); // Elimina el contenedor de la imagen del DOM
                    URL.revokeObjectURL(imageUrl); // Libera la URL de objeto para optimizar la memoria
                });

                // Añadir imagen y botón al contenedor
                imageItem.appendChild(img);
                imageItem.appendChild(deleteButton);

                // Añadir el contenedor a la galería
                gallery.appendChild(imageItem);
            } else {
                alert(`El archivo ${file.name} no es una imagen válida y no será cargado.`);
            }
        }
        imagenInput.value = ''; // Limpiar el input de archivo después de cargar
    });
});