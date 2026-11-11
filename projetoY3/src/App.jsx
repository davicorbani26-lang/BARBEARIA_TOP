import { useState, useEffect } from "react";
import NovoAgendamento from "./components/NovoAgendamento";
import Cabecalho from "./components/Cabecalho";
import StatusLoja from "./components/StatusLoja";
import AgendamentoCard from "./components/AgendamentoCard";


function App() {



  const [agendamentos, setAgendamentos] = useState (() => {
    const salvos = localStorage.getItem("Agendamentos")
    return salvos ? JSON.parse(salvos) : [];
  });  

  useEffect (() => {
    localStorage.setItem("agendamentos", JSON.stringify(agendamentos))
  }, [agendamentos])
  
  function alterarStatus(id, novoStatus){
    setAgendamentos((prev) => 
    prev.map((a) => (a.id === id ? {...a, status: novoStatus}: a)))
  }

  function excluirAgendamento (id){
    setAgendamentos((prev) => prev.filter((a) => a.id !== id))
  }

  function salvarAgendamento(dados) {
    const novoAgendamento = {
      ...dados,
      id: Date.now(),
      status: "confirmado"
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

        <p className="font-bold">
          {agendamentos.length} agendamento(s)
        </p>

        {agendamentos.length === 0 && (
          <p className="opacity-60">Nenhum agendamento</p>
        )}

        <div className="w-full flex flex-col gap-2">
          {agendamentos.map((item) => (
            <AgendamentoCard
              key={item.id}
              agendamento={item}
              alterarStatus={alterarStatus}
              excluirAgendamento={excluirAgendamento}

            />
          ))}
        </div>

        

      </div>
    </div>
  );
}

export default App;

