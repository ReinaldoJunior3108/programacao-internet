let valorKg = document.querySelector("#valorKg");
let qtdKg = document.querySelector("#qtdKg");
let calc = document.querySelector("#calc");
let valor = document.querySelector("#valor");

function calcular() {
  let kgvalor = Number(valorKg.value.replace(',', '.'));
  let kgQtd = Number(qtdKg.value.replace(',', '.'));
  let res = kgvalor * kgQtd;
  res = res.toFixed(2).replace('.', ',')
  valor.textContent =  `Valor : R$${res}`;
}
calc.onclick = function () {
  calcular();
};
