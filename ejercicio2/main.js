// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const container = document.createElement("div");
container.className = "creado-con-DOM"
container.textContent = "";

document.body.appendChild(container);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const container2 = document.createElement("div");
container2.className = "container-con-p"
container2.innerHTML = `
<p>Esto es un parrafo del ejercicio 2.2</p>
`
document.body.appendChild(container2);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const container3 = document.createElement("div");
container3.className = "container-3"

const parrafos = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < parrafos.length; i++) {
  const p = document.createElement("p")
  p.className = "parrafo";
  p.textContent = "";
  container3.appendChild(p);

}
document.body.appendChild(container3);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const pDinamico = document.createElement("p");

pDinamico.className = "parrafo-dinamico";
pDinamico.textContent = 'Soy dinámico!';

document.body.appendChild(pDinamico);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const title = document.querySelector("h2");
title.textContent = "Wubba Lubba dub dub";


// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array. const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

const lista = document.createElement("ul");
lista.className = "lista"
document.body.appendChild(lista);

for (const app of apps) {
  const li = document.createElement("li");
  li.textContent = app;
  lista.appendChild(li);

}

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const eliminar = document.querySelectorAll(".fn-remove-me");
console.log(eliminar);
for (const eliminado of eliminar) {
  eliminado.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const parrafoMedio = document.createElement("p");
parrafoMedio.textContent = 'Voy en medio!';

const div1 = document.querySelector("div");

div1.insertAdjacentElement("afterend", parrafoMedio);


// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase  .fn-insert-here

const insertar = document.querySelectorAll(".fn-insert-here");
console.log(insertar);

insertar.forEach(insertado => {
  const parrafoInterno = document.createElement("p");
  parrafoInterno.textContent = 'Voy dentro!';
  insertado.appendChild(parrafoInterno);
});