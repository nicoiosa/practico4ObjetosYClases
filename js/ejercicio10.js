class Aeropuerto {
  constructor(nombre) {
    this.nombre = nombre;
    this.listaAviones = [];
  }
  agregarAvion(avion) {
    if (typeof avion === "object") {
      this.listaAviones.push(avion);
      document.write("<p>El avion fue agregado al aeropuerto</p>");
    } else {
      document.write("<p>No ingresaste un objetio avion valido</p>");
    }
  }
  buscarAvion(avion) {
    let avionEncontrado = false;
    for (let i = 0; i < this.listaAviones.length; i++) {
      if (this.listaAviones[i] == avion) {
        avionEncontrado = true;
        break;
      }
    }
    if (avionEncontrado) {
      document.write(`<p>${avion.nombre} esta en el aeropuerto.</p>`);
    } else {
      document.write(
        `<p>Lo lamento. ${avion.nombre} no esta en el aeropuerto.</p>`
      );
    }
  }
}

class Avion {
  constructor(nombre, capacidad, destino, listaPasajeros) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.destino = destino;
    this.listaPasajeros = listaPasajeros;
  }
  abordar(nombrePasajero) {
    if (this.listaPasajeros.length < this.capacidad) {
      this.listaPasajeros.push(nombrePasajero);
      document.write(`<p>${nombrePasajero} pudo abordar el avion</p>`);
    } else {
      document.write(
        `<p>El avion estaba lleno. ${nombrePasajero} no pudo abordar el avion</p>`
      );
    }
  }
}

const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");
const jayjay = new Avion("Jay Jay el avioncito", 5, "Las Vegas, Nevada", [
  "Max Verstappen",
  "Lando Norris",
  "Clrlos Sainz Jr",
  "Oscar Piastri",
  "Fernando Alonso",
]);
const bigJake = new Avion("Big Jake", 15, "Susuka, Japon", [
  "Aloy",
  "Geralt de Rivia",
  "Lara Croft",
  "Master Chief",
  "Kratos",
  "Ezio Auditore",
  "Cortana",
  "Aiden Pearce",
  "Chloe Price",
  "Nathan Drake",
  "Samus Aran",
  "Commander Shepard",
  "Sonic the Hedgehog",
  "Princess Zelda",
]);
const tracy = new Avion("Tracy", 2, "Sao Paulo, Brasil", [
  "Don Pepito",
  "Don Jose",
]);

aeropuertoInternacional.buscarAvion(tracy);
aeropuertoInternacional.agregarAvion(tracy);
aeropuertoInternacional.agregarAvion(bigJake);
aeropuertoInternacional.agregarAvion(jayjay);
aeropuertoInternacional.buscarAvion(tracy);

jayjay.abordar("Juan Carlos Bodoque");
bigJake.abordar("Tulio Triviño");