let numberOne = document.querySelector("#numberOne");
let numberTwo = document.querySelector("#numberTwo");
let numberThree = document.querySelector("#numberThree");
let calcular = document.querySelector("#calcular");
let resultado1 = document.querySelector("#resultado1");
let resultado2 = document.querySelector("#resultado2");
let resultado3 = document.querySelector("#resultado3");
let resultado4 = document.querySelector("#resultado4");

function mediaAritmetica() {
  let n1 = Number(numberOne.value);
  let n2 = Number(numberTwo.value);
  let n3 = Number(numberThree.value);
  let resMedia = (n1 + n2 + n3) / 3;
  resultado1.textContent = "Media Aritmetica: " + resMedia;
  let resMediaP = ((n1 * 3) + (n2 * 2) + (n3 * 5)) / 10;
  resultado2.textContent = "Media Ponderada: " + resMediaP;
  let resSoma = resMedia + resMediaP;
  resultado3.textContent = "Soma das Medias: " + resSoma;
  let resTotal = (resMedia + resMediaP) / 2;
  resultado4.textContent = "Media das Medias: " + resTotal;
}

calcular.onclick = function () {
  mediaAritmetica();
};
