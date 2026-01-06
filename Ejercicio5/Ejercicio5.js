window.addEventListener("load", inicio);
function inicio() {
    const crearParrafo = document.getElementById("crear");
    crearParrafo.addEventListener("click", function () {
        const color = document.getElementById("lista").value;
        const texto = document.getElementById("texto").value;
        if (texto != 0) {
            const parrafo = document.createElement("p");
            parrafo.textContent=texto;
            parrafo.style.backgroundColor=color;
            document.body.appendChild(parrafo);
        } else alert("El area de texto está vacia")
        
    })
}