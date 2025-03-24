// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme 

const button = document.querySelector(".showme");

console.log(button);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const h1 = document.querySelector("#pillado");

console.log(h1);

// 1.3 Usa querySelector para mostrar por consola todos los p

const parrafo = document.querySelectorAll("p");

console.log(parrafo);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const pokemones = document.querySelectorAll(".pokemon");

console.log(pokemones);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".

const personajes = document.querySelectorAll('[data-function="testMe"]');

console.log(personajes);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe". 

const personaje = document.querySelectorAll('[data-function="testMe"]');

console.log(personaje[2]);


