class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
  datos() {
    document.write(`<h2>${this.nombre}</h2>`);
    document.write(`<p>Codigo: ${this.codigo}</p>`);
    document.write(`<p>Precio: $${this.precio} USD</p>`);
  }
}
const iphone = new Producto("0047", "Iphone 14 Pro", 900);
const placa = new Producto("1021", "Nvidia GTX 1650", 450);
const reloj = new Producto(
  "0097",
  "TAG Heuer Monaco Chronograph ultraligero",
  35000
);
const productos = [iphone, placa, reloj];
productos[0].datos();
productos[1].datos();
productos[2].datos();