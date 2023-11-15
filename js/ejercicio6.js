class Libro {
  #isbn;
  #titulo;
  #autor;
  #numeroPaginas;
  constructor(isbn, titulo, autor, numeroPaginas) {
    this.#isbn = isbn;
    this.#titulo = titulo;
    this.#autor = autor;
    this.#numeroPaginas = numeroPaginas;
  }
  get isbn() {
    return this.#isbn;
  }
  set isbn(nuevoIsbn) {
    this.#isbn = nuevoIsbn;
  }
  get titulo() {
    return this.#titulo;
  }
  set titulo(nuevoTitulo) {
    this.#titulo = nuevoTitulo;
  }
  get autor() {
    return this.#autor;
  }
  set autor(nuevoAutor) {
    this.#autor = nuevoAutor;
  }
  get numeroPaginas() {
    return this.#numeroPaginas;
  }
  set numeroPaginas(nuevoNumeroPaginas) {
    this.#numeroPaginas = nuevoNumeroPaginas;
  }
  mostrarLibro() {
    document.write(
      `<p>El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numeroPaginas} paginas.</p>`
    );
  }
}

const salem = new Libro("978-0307743671", "Salem's Lot", "Stephen King", 672);
const jfk = new Libro(
  "978-1451627282",
  "11/22/63: A Novel",
  "Stephen King",
  849
);
salem.mostrarLibro();
jfk.mostrarLibro();

if (salem.numeroPaginas > jfk.numeroPaginas) {
  document.write(
    `<p>El libro ${salem.titulo} tiene mas paginas que ${jfk.titulo}.</p>`
  );
} else if (salem.numeroPaginas < jfk.numeroPaginas) {
  document.write(
    `<p>El libro ${jfk.titulo} tiene mas paginas que ${salem.titulo}.</p>`
  );
} else document.write(`Ambos libros tienen la misma cantidad de paginas.</p>`);