class Persona {
  constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }
  saludar(nombre) {
    document.write(`<p>${this.nombre}: Hola ${nombre}!</p>`);
  }
  despedirse(nombre) {
    document.write(`<p>${this.nombre}: Hasta luego ${nombre}!</p>`);
  }
}
const donPepito = new Persona("Don Pepito", 45, "Ingeniero aerodinamico");
const donJose = new Persona("Don Jose", 51, "Piloto de aerolinea");

donJose.saludar(donPepito.nombre)
donPepito.saludar(donJose.nombre)
donJose.despedirse(donPepito.nombre)
donPepito.despedirse(donJose.nombre)