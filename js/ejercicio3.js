class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  modificar() {
    const alto = parseInt(prompt("Indique el alto del rectangulo"));
    this.alto = isNaN(alto) ? 0 : alto;
    const ancho = parseInt(prompt("Indique el alto del rectangulo"));
    this.ancho = isNaN(ancho) ? 0 : ancho;
    if (this.alto <= 0 || this.ancho <= 0) {
      this.alto = 0;
      this.ancho = 0;
    }
  }
  propiedades() {
    document.write(`<p>Ancho: ${this.ancho}<p>`);
    document.write(`<p>Alto: ${this.alto}<p>`);
  }
  perimetro() {
    const valor = 2 * this.alto + 2 * this.ancho;
    document.write(`<p>Perimetro: ${valor}</p>`);
  }
  area() {
    const valor = this.alto * this.ancho;
    document.write(`<p>Perimetro: ${valor}</p>`);
  }
  dibujar() {
    document.write(
      `<div class="rectangulo" style="height: ${this.alto - 2}px; width: ${
        this.ancho - 2
      }px"></div>`
    );
  }
}
const prueba = new Rectangulo(10, 20);
prueba.propiedades();
prueba.perimetro();
prueba.area();
prueba.dibujar();
prueba.modificar();
prueba.propiedades();
prueba.perimetro();
prueba.area();
prueba.dibujar();