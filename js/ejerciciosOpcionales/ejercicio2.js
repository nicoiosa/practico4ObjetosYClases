let listaTareas = {
  tareas: [
    "Clases de Rolling",
    "Lavar Ropa",
    "Lavar Platos",
    "Practicar Mecanografia",
  ],
  agregarTarea: function (posicion, nuevaTarea) {
    this.tareas.splice(posicion - 1, 0, nuevaTarea);
  },
  completarTarea: function (posicion) {
    this.tareas.splice(posicion - 1, 1);
  },
  listarTareas: function () {
    document.write("<p>Lista de tareas</p>");
    document.write("<ul>");
    for (i = 0; i < this.tareas.length; i++)
      document.write(`<li>${this.tareas[i]}</li>`);
    document.write("</ul>");
  },
};
listaTareas.listarTareas();
listaTareas.completarTarea(3);
listaTareas.agregarTarea(2, "Ir al Gym");
listaTareas.listarTareas();