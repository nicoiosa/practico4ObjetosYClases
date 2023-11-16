const productos = [];
const precios = [];
function agregarProductos(nombre, precio) {
  productos.push(nombre);
  precios.push(precio);
}
function eliminarProductos(posicion) {
  let i = posicion - 1;
  productos.splice(i, 1);
  precios.splice(i, 1);
}
function calcularValorTotal() {
  let suma = 0;
  for (let i = 0; i < precios.length; i++) {
    suma += precios[i];
  }
  document.write(`<p>El valor total de los productos es de: $${suma}</p>`);
}

agregarProductos("Lapiz", 100);
agregarProductos("Goma", 50);
agregarProductos("Lapicera", 200);
agregarProductos("Sacapuntas", 100);
console.log(precios);
calcularValorTotal();
eliminarProductos(2);
calcularValorTotal();