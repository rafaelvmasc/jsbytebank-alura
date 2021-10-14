export class Conta {
  constructor(saldoInicial, cliente, ag) {
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._ag = ag;
  }
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  sacar(valor) {
    let taxa = 1;
    const valorSacado = taxa * valor;
    this._saldo >= valorSacado ? (this._saldo -= valorSacado) : "";
    return valorSacado;
  }

  depositar(valor) {
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valor);
  }
  
}
