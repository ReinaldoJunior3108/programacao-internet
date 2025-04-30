let pago = document.querySelector("#pago");
let troco = document.querySelector("#troco");
let produto = document.querySelector("#produto");
let calcular = document.querySelector("#calcular");

function calcularTroco() {
  let valorPago = Number(pago.value);
  let valorProduto = Number(produto.value);
  let valorTroco = valorPago - valorProduto;

  troco.textContent = "Troco: R$" + valorTroco;
}
calcular.onclick = function () {
  calcularTroco();
  console.log("Valor pago: R$" + valorTroco);
};
