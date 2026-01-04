window.addEventListener("load", inicio);
 function inicio() {
    document.getElementById("crearInputTXT").addEventListener("click", crearInputTexto);
    document.getElementById("crearInputPass").addEventListener("click", crearInputPass);
    document.getElementById("crearTextarea").addEventListener("click", crearTextarea);
    document.getElementById("crearLabel").addEventListener("click", crearLabel);
    document.getElementById("crearIMG").addEventListener("click", crearIMG);
    document.getElementById("crearCheckbox").addEventListener("click", crearCheckbox);
    document.getElementById("crearRadio").addEventListener("click", crearRadio);
    document.getElementById("crearSubmit").addEventListener("click", crearSubmit);

    function crearInputTexto() {
        if(confirm("EStás seguro de crear un Input de tipo texto")){
            let inputTexto = document.createElement("input");
            let nombre = prompt("Introduce el nombre del atributo name va tener el input");
            inputTexto.setAttribute("name",nombre);
        } else return;

    }
 }
