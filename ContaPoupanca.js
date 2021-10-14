import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
  constructor(saldoInicial, cliente, ag) {
    super(saldoInicial, cliente, ag);
  }
}
