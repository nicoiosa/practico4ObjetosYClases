const estudiantes = [
  "Bruce Wayne",
  "Diana Prince",
  "Clark Kent",
  "Barry Allen",
  "Selina Kyle",
  "Arthur Curry",
  "Hal Jordan",
  "Oliver Queen",
];
const notas = [8, 7, 9, 6, 10, 5, 8, 9];
function promedio() {
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  let promedio = suma / notas.length;
  document.write(`<p>El promedio de notas de los alumnos es: ${promedio}</p>`);
}
function analisisNotas() {
  document.write(`<p>Lista de alumnos aprobados</p><ul>`);
  for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 6) {
      document.write(`<li>${estudiantes[i]}</li>`);
    }
  }
  document.write(`</ul><p>Lista de alumnos desaprobados</p><ul>`);
  for (let i = 0; i < notas.length; i++) {
    if (notas[i] < 6) {
      document.write(`<li>${estudiantes[i]}</li>`);
    }
  }
  document.write(`</ul>`);
}
promedio()
analisisNotas()