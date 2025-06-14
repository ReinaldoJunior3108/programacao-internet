import { useState } from "react";


export default function Triangle() {
  const inputStyleDark =
      "border border-gray-700 bg-transparent rounded-[8px] p-2 w-[90%]";
  const buttonStyle =
      "border border-gray-700 bg-gradient-to-r from-blue-800 to-purple-800 hover:scale-95 hover:bg-gradient-to-l from-blue-800 to-purple-800  transition rounded-[8px] p-4";

  const [side1, setSide1] = useState("");
  const [side2, setSide2] = useState("");
  const [side3, setSide3] = useState("");
  const [points, setPoints] = useState("");
  function calculateSides() {
    const A = Number(side1);
    const B = Number(side2);
    const C = Number(side3);

    if (A >= B + C || B >= A + C || C >= A + B) {
      alert("Os valores informados nao formam um triangulo valido");
    }

    const x = (A ** 2 - B ** 2 + C ** 2) / (2 * C);
    const y = Math.sqrt(A ** 2 - x ** 2);

    const Ax = 0,
      Ay = 0;
    const Bx = C,
      By = 0;

    const maxSide = Math.max(A, B, C);
    const scale = 200 / maxSide;
    const offsetX = 50;
    const offsetY = 250;

    const pontoA = `${Ax * scale + offsetX},${offsetY - Ay * scale}`;
    const pontoB = `${Bx * scale + offsetX},${offsetY - By * scale}`;
    const pontoC = `${x * scale + offsetX},${offsetY - y * scale}`;

    setPoints(`${pontoA} ${pontoB} ${pontoC}`);
    setPoints(`${pontoA} ${pontoB} ${pontoC}`);

    if (A === B && B === C) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      document.querySelector("#triangleType").innerHTML =
        `O Triângulo é do Tipo: <span class='text-red-500'> Equilátero</span>`;
    } else if (A == B || B == C || A == C) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      document.querySelector("#triangleType").innerHTML =
        `O Triângulo é do Tipo: <span class='text-red-500'> Isósceles</span>`;
    } else if (A !== B && A !== C && B !== C) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      document.querySelector("#triangleType").innerHTML =
        `O Triângulo é do Tipo: <span class='text-red-500'> Escaleno</span>`;
    }
  }

  // 50 15, 100 100, 0 100

  return (
    <div className=" flex flex-col h-[90%] items-center justify-center w-full">
      <h1 className="mt-13">Indentificador de tipo de Triangulos</h1>
      <div className=" flex flex-col h-full items-center w-full gap-5">
        <div className="flex flex-col items-center justify-center gap-5 mt-10">
          <div className="flex gap-5">
            <label htmlFor="side1">Lado A</label>
            <input
                className={inputStyleDark}
              id="side1"
              type="number"
              max="20"
              placeholder="Comprimento do Primeiro Lado"
              value={side1}
              onChange={(e) => setSide1(e.target.value)}
            />
          </div>
          <div className=" flex gap-5">
            <label htmlFor="side2">Lado B</label>
            <input
                className={inputStyleDark}
              id="side2"
              type="number"
              max="20"
              placeholder="Comprimento do Segundo Lado"
              value={side2}
              onChange={(e) => setSide2(e.target.value)}
            />
          </div>
          <div className=" flex gap-5">
            <label htmlFor="side3">Lado C</label>
            <input
                className={inputStyleDark}
              id="side3"
              type="number"
              max="20"
              placeholder="Comprimento dox Terceiro Lado"
              value={side3}
              onChange={(e) => setSide3(e.target.value)}
            />
          </div>

          <button
            className={buttonStyle}
            onClick={calculateSides}
          >
            Desenhar Triângulo
          </button>
        </div>
        <div className="container flex justify-center">
          <svg
            width="100%"
            height="300"
            viewBox="0 0 300 300"
            preserveAspectRatio="xMidYMid meet"
            className="m-auto"
          >
            <polygon
              points={points}
              fill="black"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <h1 id="triangleType">O Triângulo é do Tipo: </h1>
    </div>
  );
}
