let pago = document.querySelector("#pago");
let troco = document.querySelector("#troco");
let produto = document.querySelector("#produto");
let calcular = document.querySelector("#calcular");

function calcularTroco() {
  let valorPago = Number(pago.value.replace(',', '.'));
  let valorProduto = Number(produto.value.replace(',', '.'));
  let valorTroco = valorPago - valorProduto;
  let trocoF = valorTroco.toFixed(2).replace('.', ',');

  troco.textContent += `R$${trocoF}`;
}
calcular.onclick = function () {
  calcularTroco();
  console.log("Valor pago: R$" + trocoF);
};
