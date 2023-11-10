let auto = {
  modelo: "F-150 Raptor",
  marca: "Ford",
  color: "azul",
  estado: "Apagado",
  encender: function () {
    if (this.estado == "Encendido") {
      document.write(`<p>El auto ya esta ${this.estado}</p>`);
    } else {
      this.estado = "Encendido";
      document.write(`<p>El auto fue ${this.estado}</p>`);
    }
  },
  apagar: function () {
    if (this.estado == "Apagado") {
      document.write(`<p>El auto ya esta ${this.estado}</p>`);
    } else {
      this.estado = "Apagado";
      document.write(`<p>El auto fue ${this.estado}</p>`);
    }
  }
};
auto.encender();
auto.encender()
auto.apagar()
auto.encender()
auto.apagar()
auto.apagar()