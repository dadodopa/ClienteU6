window.addEventListener("load", inicio);
function inicio() {
    document
        .getElementById("crearInputTXT")
        .addEventListener("click", crearInputTexto);
    document
        .getElementById("crearInputPass")
        .addEventListener("click", crearInputPass);
    document
        .getElementById("crearTextarea")
        .addEventListener("click", crearTextarea);
    document.getElementById("crearLabel").addEventListener("click", crearLabel);
    document.getElementById("crearIMG").addEventListener("click", crearIMG);
    document
        .getElementById("crearCheckbox")
        .addEventListener("click", crearCheckbox);
    document.getElementById("crearRadio").addEventListener("click", crearRadio);
    document
        .getElementById("crearSubmit")
        .addEventListener("click", crearSubmit);

    const form = document.createElement("form");
    document.body.appendChild(form);
    function crearInputTexto() {
        const nombre = prompt(
            "Introduce el nombre del atributo name va tener el input"
        );
        if (
            confirm(
                "Estás seguro de crear un Input de tipo texto? Con el atributo name = " +
                    nombre
            )
        ) {
            const inputTexto = document.createElement("input");
            inputTexto.setAttribute("type", "text");
            inputTexto.setAttribute("name", nombre);
            form.appendChild(inputTexto);
        } else return;
    }

    function crearInputPass() {
        const nombre = prompt(
            "Introduce el nombre del atributo name va tener el input"
        );
        if (
            confirm(
                "Estás seguro de crear un Input de tipo Password? Con el atributo name = " +
                    nombre
            )
        ) {
            const inputPass = document.createElement("input");
            inputTexto.setAttribute("type", "password");
            inputPass.setAttribute("name", nombre);
            form.appendChild(inputPass);
        } else return;
    }
    function crearTextarea() {
        const nombre = prompt(
            "Introduce el nombre del atributo name que va tener el textarea"
        );
        if (confirm("Estás seguro de crear un textarea? name = " + nombre)) {
            const textarea = document.createElement("textarea");
            textarea.setAttribute("name", nombre);
            textarea.setAttribute("cols", 40);
            textarea.setAttribute("rows", 5);
            form.appendChild(textarea);
        } else return;
    }

    function crearLabel() {
        const atributoFor = prompt(
            "Introduce a que input va referido(atributo for)"
        );
        if (confirm("Estás seguro de crear un label? for= " + atributoFor)) {
            const label = document.createElement("label");
            label.textContent="Etiqueta para "+atributoFor;
            label.setAttribute("for", atributoFor);
            form.appendChild(label);
        } else return;
    }

    function crearIMG() {
        const rutaImagen = prompt(
            "Introduce la ruta de la imagen(atributo src)"
        );
        if (confirm("Estás seguro de crea una imagen? src= " + rutaImagen)) {
            const imagen = document.createElement("img");
            imagen.setAttribute("src", rutaImagen);
            form.appendChild(imagen);
        } else return;
    }
    function crearCheckbox() {
        const nombre = prompt("Introduce el name del checkbox");
        const valor = prompt("Introduce el value del checkbox");
        if (confirm("Estás segura de crear un checkbox? name= "+nombre+" value ="+valor)) {
            const checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox")
            checkbox.setAttribute("name", nombre);
            checkbox.setAttribute("value", valor);
            form.appendChild(checkbox);
        } else return;
    }
    function crearRadio() {
        const nombre = prompt("Introduce el name del radio");
        const valor = prompt("Introduce el value del radio");
        if (confirm("Estás segura de crear un radio? name= "+nombre+" value ="+valor)) {
            const radio = document.createElement("input");
            radio.setAttribute("type", "radio")
            radio.setAttribute("name", nombre);
            radio.setAttribute("value", valor);
            form.appendChild(radio);
        }
    }
    function crearSubmit() {
        const nombre = prompt("Introduce el name del button");
        const valor = prompt("Introduce el value del button");
        if (confirm("Estás segura de crear un button de tipo summit? name= "+nombre+" value ="+valor)) {
            const button = document.createElement("button");
            button.setAttribute("type", "submit")
            button.textContent="Subir"
            button.setAttribute("name", nombre);
            button.setAttribute("value", valor);
            form.appendChild(button);
        }
    }
}
