import { useState } from "react";
import NovoAgendamento from "./components/NovoAgendamento";
import Cabecalho from "./components/Cabecalho";
import StatusLoja from "./components/statusloja";
import AgendamentoCard from "./components/AgendamentoCard";


function App() {
  const [agendamento, setAgendamento] = useState([]);

  function salvarAgendamento(dados) {
    const novoAgendamento = {
      ...dados,
      id: Date.now()
    };

    setAgendamento((prev) => [...prev, novoAgendamento]);
  }

  return (
    <div className="flex min-h-screen justify-center items-center p-4">
      <div className="card w-full lg:w-[50%] min-h-[70%] shadow-md rounded-sm items-center p-10 gap-5">

        <Cabecalho />

        <StatusLoja aberto={true} />

        <NovoAgendamento
          salvarAgendamento={salvarAgendamento}
        />

        <p className="font-bold">
          {agendamento.length} agendamento(s)
        </p>

        {agendamento.length === 0 && (
          <p className="opacity-60">Nenhum agendamento</p>
        )}

        <div className="w-full flex flex-col gap-2">
          {agendamento.map((item) => (
            <AgendamentoCard
              key={item.id}
              agendamentos={item}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;