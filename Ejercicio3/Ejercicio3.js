

const formulario = document.createElement("form");
const texto = document.createElement("label");
texto.type

//Creo el formulario  lo inserto en el body
document.body.appendChild(formulario);

// Crear el label y el input : Nombre
const labelNombre = document.createElement("label");
labelNombre.textContent="Nombre del disco: ";
labelNombre.setAttribute("for", "nombre");

const inputNombre = document.createElement("input");
inputNombre.type="text";
inputNombre.id="nombre";
inputNombre.name="nombre";

// Crear eel label y el input : Grupo
const labelGrupo = document.createElement("label");
labelGrupo.textContent="Grupo de música o cantante: ";
labelGrupo.setAttribute("for","grupo");

const inputGrupo = document.createElement("input");
inputGrupo.type= "text";
inputGrupo.id="grupo";
inputGrupo.name="grupo";

// Crear el label y el input: Año
const labelYear = document.createElement("label");
labelYear.textContent="Año de publicación: ";
labelYear.setAttribute("for", "year");

const inputYear = document.createElement("input");
inputYear.type="text";
inputYear.id="year";
inputYear.name="year";