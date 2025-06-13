import { useState } from "react";
export default function Aumento() {
  const inputStyleDark =
    "border border-gray-700 bg-transparent rounded-[8px] p-2 w-full";
  const inputStyleLight =
    "border border-gray-300 bg-stone-100 rounded-[8px] p-2 placeholder:text-gray-700 w-full text-gray-700";
  const [cargo, setCargo] = useState("");
  const [salario, setSalario] = useState("");
  const [resultado, setResultado] = useState("");

  function calculoSalaria() {
    const cargoString = cargo;
    let salarioNumber = Number(salario);

    if (!cargoString) {
      alert("Preencha os dados Corretamente");
      return;
    }

    let aumentoTaxa;

    if (cargoString === "gerente") {
      aumentoTaxa = 0.1;
    } else if (cargoString === "engenheiro") {
      aumentoTaxa = 0.2;
    } else if (cargoString === "tecnico") {
      aumentoTaxa = 0.3;
    } else {
      aumentoTaxa = 0.4;
    }

    salarioNumber += salarioNumber * aumentoTaxa;

    setResultado(`R$${salarioNumber.toFixed(2).replace(".", ",")}`);
  }
  return (
    <div className="max-w-[30%] m-auto">
      <div className="flex flex-col ">
        <div className="flex flex-col gap-2 mt-13">
          <label htmlFor="">Cargo</label>
          <select
            name="cargo"
            id="cargo"
            className={inputStyleDark}
            onChange={(e) => setCargo(e.target.value)}
            value={cargo}
          >
            <option value="" selected disabled>
              Selecione um Cargo
            </option>
            <option value="gerente">Gerente</option>
            <option value="engenheiro">Engenheiro</option>
            <option value="tecnico">Técnico</option>
            <option value="outro">Outro</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label htmlFor="salario">Salario Atual</label>
          <input
            id="salario"
            className={inputStyleLight}
            value={salario}
            type="Number"
            placeholder="R$"
            onChange={(e) => setSalario(e.target.value)}
          />
        </div>
        <button
          className="border w-full mt-5 border-gray-700 bg-gradient-to-r from-blue-800 to-purple-800 hover:scale-95 hover:bg-gradient-to-l from-blue-800 to-purple-800  transition rounded-[8px] p-4
       "
          onClick={calculoSalaria}
        >
          Calcular Reajuste Salarial
        </button>
        <div className="mt-5 m-auto">
          {resultado && (
            <p className="text-[18px]">
              Salario após reajuste de acordo com cargo:{" "}
              <span className="underline text-[20px]">{resultado}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
