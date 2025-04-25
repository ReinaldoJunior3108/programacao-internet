let num1 = document.querySelector("#inputNum1");
let num2 = document.querySelector("#inputNum2");
let resultado = document.querySelector("#resultado");
let btSomar = document.querySelector("#btSomar");

function somar() {
  let n1 = Number(num1.value);
  let n2 = Number(num2.value);
  let res = n1 + n2;
  resultado.textContent = "Resultado: " + res;
  console.log("Resultado: " + res);
}
btSomar.onclick = function () {
  somar();
};
