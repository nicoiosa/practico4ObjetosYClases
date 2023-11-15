class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}
class Agenda {
  constructor(tamañoMaximo = 10) {
    this.contactos = [];
    this.tamañoMaximo = tamañoMaximo;
  }
  añadirContacto(contacto) {
    if (this.contactos.length < this.tamañoMaximo) {
      if (this.contactos.some((c) => c.nombre === contacto.nombre)) {
        alert("El contacto ya existe");
      } else {
        this.contactos.push(contacto);
        alert("El contacto fue agregado");
      }
    } else alert("La agenda esta llena");
  }
  existeContacto(nombre) {
    if (this.contactos.some((c) => c.nombre === nombre)) {
      alert("El contacto ya existe");
    } else {
      alert("El contacto no existe");
    }
  }
  listarContactos() {
    if (this.contactos.length > 0) {
      let listaContactos = "Lista de contactos:\n";
      this.contactos.forEach((contacto) =>
        listaContactos += `${contacto.nombre} - ${contacto.telefono}\n`
      );
      alert(listaContactos);
    } else {
      alert("Todavía no hay ningún contacto");
    }
  }
  buscarContacto(nombre) {
    const contactoEncontrado = this.contactos.find(
      (contacto) => contacto.nombre === nombre
    );
    if (contactoEncontrado) {
      alert(`Contacto encontrado: ${contactoEncontrado.nombre} - ${contactoEncontrado.telefono}`);
    } else {
      alert("No se encontró ningún contacto con ese nombre");
    }
  }
  eliminarContacto(contacto) {
    const i = this.contactos.findIndex((c) => c.nombre === contacto.nombre);
    if (i >= 0) {
      if (this.contactos.some((c) => c.nombre === contacto.nombre)) {
        this.contactos.splice(i, 1);
        alert("El contacto fue elimnado");
      } else alert("El contacto no fue eliminado porque es inexistente");
    }
  }
  agendaLlena() {
    if (this.contactos.length == this.tamañoMaximo) {
      alert("La agenda esta llena");
    } else {
      alert("La agenda todavia tiene espacio");
    }
  }
  huecosLibres() {
    if (this.contactos.length != this.tamañoMaximo) {
      alert(
        `La agenda todavia tiene ${
          this.tamañoMaximo - this.contactos.length
        } espacios vacios`
      );
    } else alert("La agenda esta llena");
  }
}
function mostrarMenu(agenda) {
  let opcion;
  do {
    opcion = prompt(`
    1. Añadir Contacto
    2. Comprobar si existe un Contacto
    3. Listar Contactos
    4. Buscar Contacto por Nombre
    5. Eliminar Contacto
    6. Agenda Llena
    7. Huecos Libres
    0. Salir
  `);
    switch (opcion) {
      case "1":
        const nombreNuevo = prompt("Ingrese el nombre del nuevo contacto:");
        const telefonoNuevo = prompt("Ingrese el teléfono del nuevo contacto:");
        const nuevoContacto = new Contacto(nombreNuevo, telefonoNuevo);
        agenda.añadirContacto(nuevoContacto);
        break;
      case "2":
        const nombreExistente = prompt(
          "Ingrese el nombre del contacto a comprobar:"
        );
        agenda.existeContacto(nombreExistente);
        break;
      case "3":
        agenda.listarContactos();
        break;
      case "4":
        const nombreBuscar = prompt("Ingrese el nombre del contacto a buscar:");
        agenda.buscarContacto(nombreBuscar);
        break;
      case "5":
        const nombreEliminar = prompt(
          "Ingrese el nombre del contacto a eliminar:"
        );
        const contactoEliminar = new Contacto(nombreEliminar, "");
        agenda.eliminarContacto(contactoEliminar);
        break;
      case "6":
        agenda.agendaLlena();
        break;
      case "7":
        agenda.huecosLibres();
        break;
      case "0":
        alert("Saliendo del programa.");
        break;
      default:
        alert("Opción no válida. Por favor, ingrese un número del menú.");
    }
  } while (opcion !== "0");
}
const miAgenda = new Agenda();
mostrarMenu(miAgenda);