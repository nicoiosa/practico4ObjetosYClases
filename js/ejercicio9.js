class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  emitirSonido() {
    document.write(`<p>${this.nombre}: ROAARR</p>`);
  }
}
class Perro extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
  }
  emitirSonido() {
    document.write(`<p>${this.nombre}: GUAU GUAU GUAU</p>`);
  }
}
class Gato extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
  }
  emitirSonido() {
    document.write(`<p>${this.nombre}: MIAU MIAU</p>`);
  }
}
const clifford = new Perro("Clifford", 5);
const mrMidnight = new Gato("Mr. Midnigth", 7);

clifford.emitirSonido()
mrMidnight.emitirSonido()