
import { useState } from "react";

import NovoAgendamento from "./components/NovoAgendamento";
import Cabecalho from "./components/Cabecalho";
import StatusLoja from "./components/StatusLoja";
import AgendamentoCard from "./AgendamentoCard";

function App() {
  const [agendamentos, setAgendamentos] = useState([]);

  function salvarAgendamento(dados) {
    const novoAgendamento = {
      id: Date.now(),
      nome: dados.nome,
      telefone: dados.telefone,
    };

    setAgendamentos((prev) => [...prev, novoAgendamento]);
  }

  return (
    <div className="flex min-h-screen justify-center items-center p-4">
      <div className="card w-full lg:w-[50%] min-h-[70%] shadow-md rounded-sm items-center p-10 gap-5">

        <Cabecalho />

        <StatusLoja aberto={true} />

        <NovoAgendamento
          salvarAgendamento={salvarAgendamento}
        />

        <div className="w-full flex flex-col gap-2">
          {agendamento.map((item) => (
            <div
              key={item.id}
              className="bg-base-200 rounded p-3"
            >
              <p className="font-bold">{item.nome}</p>
              <p>{item.telefone}</p>
            </div>
          ))}
        </div>

        <AgendamentoCard/>

      </div>
    </div>
  );
}

export default App;
