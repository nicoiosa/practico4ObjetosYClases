let cuentaBancaria = {
  titular: "Max Verstappen",
  saldo: 12000000,
  depositar: function () {
    const deposito = parseInt(
      prompt("Indique cuanto dinero quiere ingresar a la cuenta")
    );
    this.saldo = this.saldo + (isNaN(deposito) ? 0 : deposito);
    this.imprimirDatos();
  },
  retirar: function(){
    const retiro = parseInt(prompt("Indique cuanto dinero quiere retirar de la cuenta"));
    this.saldo = this.saldo - (isNaN(retiro) ? 0 : retiro);
    this.imprimirDatos();
  },
  imprimirDatos: function () {
    document.write(`<p>Titular de cuenta: ${this.titular}</p>`);
    document.write(`<p>Saldo actual: $${this.saldo}</p>`);
  },
};
cuentaBancaria.imprimirDatos();
cuentaBancaria.depositar();
cuentaBancaria.retirar();