// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

const myButton = document.querySelector("#btnToClick");
myButton.addEventListener("click", (ev) => {
  console.log(ev);
});


// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const inputFocus = document.querySelector(".focus");
inputFocus.addEventListener("focus", () => {
  console.log(inputFocus.value);
})

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const inputInput = document.querySelector(".value")
inputInput.addEventListener("input", () => {
  console.log(inputInput.value);
})


/* Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];    */

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const miLista = document.createElement("ul");
document.body.appendChild(miLista);

for (const album of albums) {
  const li1 = document.createElement("li");
  li1.textContent = album;
  miLista.appendChild(li1);
}



