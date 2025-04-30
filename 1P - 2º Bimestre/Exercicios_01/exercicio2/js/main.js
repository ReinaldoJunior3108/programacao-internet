let valorKg = document.querySelector("#valorKg");
let qtdKg = document.querySelector("#qtdKg");
let calc = document.querySelector("#calc");
let valor = document.querySelector("#valor");

function calcular() {
  let kgvalor = Number(valorKg.value);
  let kgQtd = Number(qtdKg.value);
  let res = kgvalor * kgQtd;
  valor.textContent = "Valor: R$" + res;
}
calc.onclick = function () {
  calcular();
};
