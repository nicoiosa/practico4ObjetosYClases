const nombresProyectos = [
  "Proyecto Aurora",
  "Proyecto Ícaro",
  "Proyecto Céfiro",
  "Proyecto Helios",
  "Proyecto Ónix",
  "Proyecto Quasar",
  "Proyecto Nimbus",
  "Proyecto Génesis",
  "Proyecto Eclipse",
  "Proyecto Titanio",
];

// Array de estados de proyectos
const estadosProyectos = [
  "En curso",
  "Completado",
  "En pausa",
  "En curso",
  "Pendiente",
  "Completado",
  "En curso",
  "En pausa",
  "Pendiente",
  "Completado",
];
const responsablesProyectos = ["", "", "", "", "", "", "", "", "", ""];

function agregarProyecto(nombre, estado, responsable) {
  nombresProyectos.push(nombre);
  estadosProyectos.push(estado);
  if (responsable == undefined) {
    responsable = "";
  }
  responsablesProyectos.push(responsable);
}
function modificarEstado(posicion, nuevoEstado) {
  let i = posicion - 1;
  estadosProyectos.splice(i, 1, nuevoEstado);
}
function asignarResponsable(posicion, nuevoResponsble) {
  let i = posicion - 1;
  responsablesProyectos.splice(i, 1, nuevoResponsble);
}
function proyectosEnCurso() {
  document.write(`<p>Lista de proyectos en curso</p><ul>`);
  for (let i = 0; i < estadosProyectos.length; i++) {
    if (estadosProyectos[i] == "En curso") {
      document.write(`<li>${nombresProyectos[i]}.`);
      if (responsablesProyectos[i] != "") {
        document.write(` Responsable: ${responsablesProyectos[i]}.`);
      }
      document.write(`</li>`);
    }
  }
  document.write(`</ul>`);
}
proyectosEnCurso();
agregarProyecto("Proyecto Arceus", "En curso");
modificarEstado(3, "En curso");
asignarResponsable(3, "Naruto Usumaki");
proyectosEnCurso();