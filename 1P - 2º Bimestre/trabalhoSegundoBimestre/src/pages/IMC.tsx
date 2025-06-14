import { useState } from "react";

export default function IMC() {
  const inputStyleDark =
    "border border-gray-700 bg-transparent rounded-[8px] p-2 w-[90%]";
  const buttonStyle =
    "border border-gray-700 bg-gradient-to-r from-blue-800 to-purple-800 hover:scale-95 hover:bg-gradient-to-l from-blue-800 to-purple-800  transition rounded-[8px] p-4";

  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");
  const [magreza, setMagreza] = useState("grayscale-100");
  const [normal, setNormal] = useState("grayscale-100");
  const [sobre, setSobre] = useState("grayscale-100");
  const [obesidade, setObesidade] = useState("grayscale-100");
  const [obesidadeg, setObesidadeg] = useState("grayscale-100");

  function calcularIMC() {
    const pesoNumber = Number(peso);
    const alturaNumber = Number(altura) / 100;

    if (!peso || !altura) {
      alert("Insira os dados corretamente");
    }

    const imc = pesoNumber / (alturaNumber * alturaNumber);

    let classification = "";

    if (imc < 16) {
      classification = "Magreza Grave";
    } else if (imc < 17) {
      classification = "Magreza Moderada";
    } else if (imc < 18.5) {
      classification = "Magreza leve";
    } else if (imc < 25) {
      classification = "Normal";
    } else if (imc < 30) {
      classification = "Sobrepeso";
    } else if (imc < 35) {
      classification = "Obesidade Grau I";
    } else if (imc < 40) {
      classification = "Obesidade Grau II";
    } else if (imc >= 40) {
      classification = "Obesidade Grau III";
    }

    switch (classification) {
      case "Magreza Grave":
        setMagreza("grayscale-0 scale-105");
        setNormal("grayscale-100");
        setObesidade("grayscale-100");
        setObesidadeg("grayscale-100");
        setSobre("grayscale-100");
        break;
      case "Magreza Moderada":
        setMagreza("grayscale-0 scale-105");
        setNormal("grayscale-100");
        setObesidade("grayscale-100");
        setObesidadeg("grayscale-100");
        setSobre("grayscale-100");
        break;
      case "Magreza leve":
        setMagreza("grayscale-0 scale-105");
        setNormal("grayscale-100");
        setObesidade("grayscale-100");
        setObesidadeg("grayscale-100");
        setSobre("grayscale-100");
        break;
      case "Normal":
        setNormal("grayscale-0 scale-105");
        setMagreza("grayscale-100");
        setObesidade("grayscale-100");
        setObesidadeg("grayscale-100");
        setSobre("grayscale-100");
        break;
      case "Sobrepeso":
        setSobre("grayscale-0 scale-105");
        setMagreza("grayscale-100");
        setObesidade("grayscale-100");
        setObesidadeg("grayscale-100");
        setNormal("grayscale-100");
        break;
      case "Obesidade Grau I":
        setObesidade("grayscale-0 scale-105");
        setMagreza("grayscale-100");
        setSobre("grayscale-100");
        setObesidadeg("grayscale-100");
        setNormal("grayscale-100");
        break;
      case "Obesidade Grau II":
        setObesidadeg("grayscale-0 scale-105");
        setMagreza("grayscale-100");
        setSobre("grayscale-100");
        setObesidade("grayscale-100");
        setNormal("grayscale-100");
        break;
      case "Obesidade Grau III":
        setObesidadeg("grayscale-0 scale-105");
        setMagreza("grayscale-100");
        setSobre("grayscale-100");
        setObesidade("grayscale-100");
        setNormal("grayscale-100");
        break;
    }
    setResultado(
      `Seu IMC é de ${imc.toFixed(2)}, considerado ${classification}`,
    );
  }
  return (
    <div className="flex flex-col items-center gap-5 justify-evenly ">
      <h1 className="text-xl mx-auto mt-13">Calculadora de IMC</h1>
      <div className="flex flex-col justify-center mt-5 gap-5 align-center mx-auto w-[15%]">
        <div className="flex flex-col justify-center align-center gap-5">
          <label htmlFor="altura">Altura</label>
          <input
            className={inputStyleDark}
            type="number"
            id="altura"
            placeholder="Altura em CM"
            value={altura}
            step="0.01"
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>
        <div className="flex flex-col align-center gap-3">
          <label htmlFor="peso">Peso</label>
          <input
            className={inputStyleDark}
            type="number"
            id="peso"
            value={peso}
            placeholder="Peso em KG"
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        <button className={buttonStyle} onClick={calcularIMC}>
          Calcular IMC
        </button>
      </div>
      <div>{resultado && <p>{resultado}</p>}</div>
      <div className="flex gap-5 justify-center mt-5 ">
        <div className="tooltip" data-tip="hello">
          <img src="/magreza.png" alt="" className={magreza} />
          <p>MAGREZA</p>
        </div>
        <div>
          <img src="/normal.png" alt="" className={normal} />
          <p>NORMAL</p>
        </div>
        <div>
          <img src="/sobrePeso.png" alt="" className={sobre} />
          <p>SOBREPESO</p>
        </div>
        <div>
          <img src="/obesidade.png" alt="" className={obesidade} />
          <p>OBESIDADE</p>
        </div>
        <div>
          <img src="/obesidade2.png" alt="" className={obesidadeg} />
          <p>OBESIDADE GRAVE</p>
        </div>
      </div>
    </div>
  );
}
