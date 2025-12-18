//Creo el formulario  lo inserto en el body
const formulario = document.createElement("form");
document.body.appendChild(formulario);

let arrayDatos=[];

// Crear el label y el input : Nombre
const labelNombre = document.createElement("label");
labelNombre.textContent = "Nombre del disco: ";
labelNombre.setAttribute("for", "nombre");
arrayDatos.push(labelNombre);

const inputNombre = document.createElement("input");
inputNombre.type = "text";
inputNombre.id = "nombre";
inputNombre.name = "nombre";
arrayDatos.push(inputNombre);

// Crear eel label y el input : Grupo
const labelGrupo = document.createElement("label");
labelGrupo.textContent = "Grupo de música o cantante: ";
labelGrupo.setAttribute("for", "grupo");
arrayDatos.push(labelGrupo);

const inputGrupo = document.createElement("input");
inputGrupo.type = "text";
inputGrupo.id = "grupo";
inputGrupo.name = "grupo";
arrayDatos.push(inputGrupo);

// Crear el label y el input: Año
const labelYear = document.createElement("label");
labelYear.textContent = "Año de publicación: ";
labelYear.setAttribute("for", "year");
arrayDatos.push(labelYear);

const inputYear = document.createElement("input");
inputYear.type = "text";
inputYear.id = "year";
inputYear.name = "year";
arrayDatos.push(inputYear);

//Crear label de tipo de música
const labelTipo = document.createElement("label");
labelTipo.textContent = "Tipo de música";
labelTipo.setAttribute("for", "tipo");
arrayDatos.push(labelTipo);

//Creamos el select de tipo de musica
const selectTipo = document.createElement("select");
selectTipo.name = "tipo";
selectTipo.id = "tipo";

//Creamos los option para el select
const optRock = document.createElement("option");
optRock.textContent = "Rock";
optRock.value = "rock";

const optPop = document.createElement("option");
optPop.textContent = "Pop";
optPop.value = "pop";

const optPunk = document.createElement("option");
optPunk.textContent = "Punk";
optPunk.value = "punk";

const optIndie = document.createElement("option");
optIndie.textContent = "Indie";
optIndie.value = "indie";

//Añadimos los option al select
selectTipo.appendChild(optRock);
selectTipo.appendChild(optPop);
selectTipo.appendChild(optPunk);
selectTipo.appendChild(optIndie);
arrayDatos.push(selectTipo);

//Creamos el label y el input de Localización
const labelLocal = document.createElement("label");
labelLocal.setAttribute("for", "local");
labelLocal.textContent("Localización: ");
arrayDatos.push(labelLocal);

const inputLocal = document.createElement("input");
inputLocal.type = "text";
inputLocal.readOnly = true;
arrayDatos.push(inputLocal);

//Creamos el label y el input de Prestamo
const labelPrestamo = document.createElement("label");
labelPrestamo.textContent="Prestamo: ";
labelPrestamo.setAttribute("for", "prestamo");
arrayDatos.push(labelPrestamo);

const inputPrestamo = document.createElement("input");
inputPrestamo.value="false";
inputPrestamo.type="text";
inputPrestamo.name="prestamo";
inputPrestamo.id="prestamo";
inputPrestamo.readOnly=true;
arrayDatos.push(inputPrestamo);

//Creamos el boton para enviar el formulario
const boton = document.createElement("input");
boton.type="button";
boton.id="enviar";
boton.value="Enviar";
arrayDatos.push(boton)

//Añadimos todos los inputs y los label al form
arrayDatos.forEach(element => {
    formulario.appendChild(element);
});