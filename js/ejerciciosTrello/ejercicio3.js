const libros = [
  "Carrie",
  "Salem's Lot",
  "The Shining",
  "It",
  "The Stand",
  "Misery",
  "The Dark Tower series",
  "Pet Sematary",
  "Cujo",
  "The Green Mile",
  "The Dead Zone",
  "11/22/63",
  "The Outsider",
  "Doctor Sleep",
  "The Gunslinger",
  "Under the Dome",
  "The Tommyknockers",
  "Needful Things",
  "Dolores Claiborne",
  "The Talisman",
  "The Institute",
  "The Long Walk",
  "Revival",
  "The Eyes of the Dragon",
  "Christine",
  "Firestarter",
  "The Mist",
  "The Running Man",
  "The Girl Who Loved Tom Gordon",
];
const disponibilidadLibros = Array(libros.length).fill(true);
disponibilidadLibros[2] = false;
disponibilidadLibros[11] = false;
disponibilidadLibros[5] = false;
disponibilidadLibros[7] = false;

function buscarLibro(libro) {
  let libroEncontrado = false;
  for (let i = 0; i < libros.length; i++) {
    if (libros[i] == libro) {
      libroEncontrado = true;
      break;
    }
  }
  if (libroEncontrado) {
    document.write(`<p>Si tenemos el libro ${libro} en la biblioteca</p>`);
  } else {
    document.write(
      `<p>Lo lamento. No tenemos el libro ${libro} en la biblioteca</p>`
    );
  }
}
function chequearDisponibilidad(libro) {
  let libroEncontrado = false;
  for (let i = 0; i < libros.length; i++) {
    if (libros[i] == libro) {
      libroEncontrado = true;
      if (disponibilidadLibros[i]) {
        document.write(
          `<p>El libro ${libro} esta disponible para prestamo</p>`
        );
      } else {
        document.write(
          `<p>El libro ${libro} no esta disponible en este momento</p>`
        );
      }
      break;
    }
  }
  if (libroEncontrado == false) {
    document.write(
      `<p>Lo lamento. No tenemos el libro ${libro} en la biblioteca</p>`
    );
  }
}
function librosDisponibles() {
  document.write(`<p>Lista de libros disponibles</p><ul>`);
  for (let i = 0; i < libros.length; i++) {
    if (disponibilidadLibros[i]) {
      document.write(`<li>${libros[i]}.</li>`);
    }
  }
  document.write(`</ul>`);
  document.write(`<p>Lista de libros a prestamo</p><ul>`);
  for (let i = 0; i < libros.length; i++) {
    if (disponibilidadLibros[i] == false) {
      document.write(`<li>${libros[i]}.</li>`);
    }
  }
  document.write(`</ul>`);
}

librosDisponibles();
buscarLibro("It");
chequearDisponibilidad("Carrie");
chequearDisponibilidad("The Shining");
chequearDisponibilidad("Alice in Wonderland");