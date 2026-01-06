window.addEventListener("load", inicio);
function inicio() {
    document
        .getElementById("selectorArchivo")
        .addEventListener("change", function () {
            const archivo = this.files[0];
            if (!archivo) return;

            const iframe = document.getElementById("frame");
            iframe.src = archivo.name;
        });
    function analizarIframe() {
        const iframe = document.getElementById("frame");
        const doc = iframe.contentDocument;

        if (!doc) {
            alert("No se pudo acceder al documento del iframe.");
            return;
        }

        analizarPagina(doc, "resultadoFrame");
    }
}
