class cuenta {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }
  ingresar() {
    const ingreso = parseInt(
      prompt("Indique cuanto dinero quiere ingresar a la cuenta")
    );
    this.saldo = this.saldo + (isNaN(ingreso) ? 0 : ingreso);
  }
  retirar() {
    const retiro = parseInt(
      prompt("Indique cuanto dinero quiere retirar de la cuenta")
    );
    this.saldo = this.saldo - (isNaN(retiro) ? 0 : retiro);
  }
  informar() {
    document.write(`<p>Titular de cuenta: ${this.titular}</p>`);
    document.write(`<p>Saldo actual: $${this.saldo}</p>`);
  }
}
const alex = new cuenta("Alex", 0);
alex.informar();
alex.ingresar();
alex.retirar();
alex.informar();