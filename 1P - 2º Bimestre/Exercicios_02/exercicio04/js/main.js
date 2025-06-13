let sabor1 = document.querySelector("#primeiroSabor");
let sabor2 = document.querySelector("#segundoSabor");
let sabor3 = document.querySelector("#terceiroSabor");
let sabor4 = document.querySelector("#quartoSabor");
let refri = document.querySelector("#refri");
let calc = document.querySelector("#calc");
let resultado = document.querySelector("#resultado");


function pedido() {
    saborP = sabor1.value
    saborS = sabor2.value
    saborT = sabor3.value
    saborQ = sabor4.value
    let refris = Number(refri.value)
  resultado.innerHTML = `Sabores:<br />${saborP} (R$12,00)<br />${saborS} (R$12,00)<br />${saborT} (R$12,00)<br />${saborQ} (R$12,00)<br />
    Refris: R$${refris * 7} (R$7,00 un) <br /> Valor Total: R$${(12*4) + (refris*7)}
    `;
}
calc.addEventListener('click', () => {
    pedido()
})

function increase() {
    let valueRefri = Number(document.querySelector('#refri').value)
    valueRefri < 5 ?valueRefri++ : '' ;
    document.querySelector('#refri').value = valueRefri
}
function decrease() {
    let valueRefri = Number(document.querySelector('#refri').value)
    valueRefri < 1 ? '' : valueRefri--;
    document.querySelector('#refri').value = valueRefri
}
const toggleButton = document.querySelector('#toggleButton')
const cart = document.querySelector('#cart')
const navCart = document.querySelector('#navCart')

toggleButton.addEventListener('click', () => {
    cart.classList.toggle('open')
    navCart.classList.toggle('open')
})