let sabor1 = document.querySelector("#sabor1");
let sabor2 = document.querySelector("#sabor2");
let sabor3 = document.querySelector("#sabor3");
let sabor4 = document.querySelector("#sabor4");
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
var data = [
  {
      value: 300,
      color:"#F7464A",
      highlight: "#FF5A5E",
      label: "Red"
  },
  {
      value: 50,
      color: "#46BFBD",
      highlight: "#5AD3D1",
      label: "Green"
  },
  {
      value: 100,
      color: "#FDB45C",
      highlight: "#FFC870",
      label: "Yellow"
  }
];

var ctx = document.getElementById("myChart").getContext("2d");
new Chart(ctx).Pie(data);
//new Chart(ctx).Doughnut(data);
