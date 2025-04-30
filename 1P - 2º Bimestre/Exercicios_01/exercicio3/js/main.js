let saldo = document.querySelector("#saldo");
let calcular = document.querySelector("#calcular");
let resultado = document.querySelector("#resultado");

function calcularSaldo() {
  let saldoInicial = Number(saldo.value);
  let saldoFinal = saldoInicial * 1.01;
  resultado.textContent = "Saldo após reajuste: R$" + saldoFinal;
}
calcular.onclick = function () {
  calcularSaldo();
};
