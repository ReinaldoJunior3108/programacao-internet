import { useState } from "react";
export default function Professor() {
  const inputStyleDark =
    "border border-gray-700 bg-transparent px-2 rounded-[8px] p-2";
  const buttonStyle =
    "border border-gray-700 bg-gradient-to-r from-blue-800 to-purple-800 hover:scale-95 hover:bg-gradient-to-l from-blue-800 to-purple-800  transition rounded-[8px] p-4";

  const [nivel, setNivel] = useState("");
  const [nomeProfessor, setNomeProfessor] = useState("");
  const [horas, setHoras] = useState("");
  const [resultado, setResultado] = useState([]);

  const calculoSalario = () => {
    const horasNumber = Number(horas);
    let niveis = 0;
    switch (nivel) {
      case "N1":
        niveis = 12;
        break;
      case "N2":
        niveis = 17;
        break;
      case "N3":
        niveis = 25;
        break;
    }

    const salarioFinal = niveis * horasNumber * 4.5;

    const resultadoFinal = {
      nomeProfessor,
      horasNumber,
      salarioFinal,
    };

    setResultado((prev) => [...prev, resultadoFinal]);
  };
  return (
    <div className="max-w-[30%] m-auto">
      <div className="flex flex-col justify-center gap-10">
        <h1 className="text-[24px] text-center mt-13">Pagamento Professores</h1>
        <div className="flex flex-col gap-5">
          <input
            type="text"
            className={inputStyleDark}
            placeholder="Nome do Professor"
            onChange={(e) => setNomeProfessor(e.target.value)}
          />
          <div className="flex justify-between">
            <input
              type="number"
              className={inputStyleDark}
              placeholder="Horas Aula"
              onChange={(e) => setHoras(e.target.value)}
            />
            <select
              name=""
              id="nivel"
              className={inputStyleDark}
              onChange={(e) => setNivel(e.target.value)}
            >
              <option value="" selected disabled>
                --Nivel--
              </option>
              <option value="N1">Nivel 1</option>
              <option value="N2">Nivel 2</option>
              <option value="N3">Nivel 3</option>
            </select>
            <button onClick={calculoSalario} className={buttonStyle}>
              Calcular
            </button>
          </div>
        </div>
        {resultado.length > 0 && (
          <>
            <div className="border border-gray-500 rounded-[8px]  mt-10">
              <table className="w-full ">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Horas Aula</th>
                    <th>Salario</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {resultado.map((resultado, index) => (
                    <tr key={index}>
                      <td>{resultado.nomeProfessor}</td>
                      <td>{resultado.horasNumber}</td>
                      <td>
                        R$ {resultado.salarioFinal.toFixed(2).replace(".", ",")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
