import "./App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Triangle from "./pages/Triangle.tsx";
import IMC from "./pages/IMC.tsx";
import Detran from "./pages/Detran.tsx";
import Aumento from "./pages/Aumento.tsx";
import Credito from "./pages/Credito.tsx";
import Lanchonete from "@/pages/Lanchonete.tsx";
import Vendas from "@/pages/Vendas.tsx";
import Professor from "@/pages/Professor.tsx";
function App() {
  const tabStyle = "bg-transparent focus:outline-none p-2 transition";
  const tabStyleSelected = "bg-transparent border-b-2 p-2 transition";
  return (
    <>
      <Tabs>
        <TabList className="fixed flex flex-col justify-evenly h-[100%] !mt-0">
          <Tab
            className={tabStyle}
            selectedClassName={`border-b-red-600 ${tabStyleSelected}`}
          >
            Triangulo
          </Tab>
          <Tab
            className={tabStyle}
            selectedClassName={`border-b-green-600 ${tabStyleSelected}`}
          >
            IMC
          </Tab>
          <Tab
            className={tabStyle}
            selectedClassName={`border-b-blue-800 ${tabStyleSelected}`}
          >
            Detran
          </Tab>
          <Tab
            className={tabStyle}
            selectedClassName={`border-b-purple-600 ${tabStyleSelected}`}
          >
            Aumento
          </Tab>
          <Tab
            className={tabStyle}
            selectedClassName={`border-b-yellow-600 ${tabStyleSelected}`}
          >
            Credito Bancário
          </Tab>
          <Tab
            className={tabStyle}
            selectedClassName={`border-b-white ${tabStyleSelected}`}
          >
            Lanchonete
          </Tab>
          <Tab
            className={tabStyle}
            selectedClassName={`border-b-green-500 ${tabStyleSelected}`}
          >
            Sistema de Vendas
          </Tab>
          <Tab
            className={tabStyle}
            selectedClassName={`border-b-red-500 ${tabStyleSelected}`}
          >
            Professores
          </Tab>
        </TabList>
        <TabPanel>
          <Triangle></Triangle>
        </TabPanel>
        <TabPanel>
          <IMC></IMC>
        </TabPanel>
        <TabPanel>
          <Detran></Detran>
        </TabPanel>
        <TabPanel>
          <Aumento></Aumento>
        </TabPanel>
        <TabPanel>
          <Credito></Credito>
        </TabPanel>
        <TabPanel>
          <Lanchonete></Lanchonete>
        </TabPanel>
        <TabPanel>
          <Vendas></Vendas>
        </TabPanel>
        <TabPanel>
          <Professor></Professor>
        </TabPanel>
      </Tabs>
    </>
  );
}

export default App;
