/* 1.1 Basandote en el array siguiente, crea una lista ul > li
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']; */

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const listaCountries = document.createElement("ul");
listaCountries.className = "lista1";
document.body.appendChild(listaCountries);

for (const country of countries) {
  const li1 = document.createElement("li");
  li1.textContent = country;
  listaCountries.appendChild(li1);
}

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const eliminado = document.querySelector(".fn-remove-me")
console.log(eliminado);
eliminado.remove();

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']; */

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const container = document.querySelector('[data-function="printHere"]');
const listaCars = document.createElement("ul");
container.appendChild(listaCars);

for (const car of cars) {
  const li2 = document.createElement("li");
  li2.textContent = car;
  listaCars.appendChild(li2);
}

/* 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.
const countries = [
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
]; */

const countries1 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

const main = document.createElement("main");
document.body.appendChild(main);
for (const country1 of countries1) {
  const div = document.createElement("div");
  div.innerHTML = `
  <h4>${country1.title}</h4>
  <img src="${country1.imgUrl}" alt="${country1.title}">
  `;
  main.appendChild(div);
};




/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs. */

const eliminarUltimo = document.createElement("button");
eliminarUltimo.textContent = "Eliminar ultimo";
main.appendChild(eliminarUltimo);



eliminarUltimo.addEventListener("click", (ev) => {
  const divs = document.querySelectorAll("main > div");
  const lastDiv = divs[divs.length - 1];
  console.log(divs);
  console.log(lastDiv);
  lastDiv.remove();
});


/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html. */

for (const country1 of countries1) {
  const div = document.createElement("div");
  //usando el bucle anterior agrego un boton para cada div // se van a crear otra vez los divs para que queden registrados ambos ejercicios sin perder el anterior
  div.innerHTML = `
  <h4>${country1.title}</h4>
  <img src="${country1.imgUrl}" alt="${country1.title}">
  <button class="eliminarUno">Eliminar div</button>
  `;
  main.appendChild(div);
};

const eliminarUno = document.querySelectorAll(".eliminarUno");
console.log(eliminarUno);

eliminarUno.forEach(button => {
  button.addEventListener("click", (ev) => {
    ev.target.parentElement.remove();
  });
});

