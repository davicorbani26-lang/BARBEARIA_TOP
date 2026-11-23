import { useState, useEffect } from "react";
import NovoAgendamento from "./components/NovoAgendamento";
import Cabecalho from "./components/Cabecalho";
import StatusLoja from "./components/StatusLoja";
import AgendamentoCard from "./components/AgendamentoCard";

function App() {
  // lista de agendamentos: ao abrir, carrega o que estava salvo no navegador
  const [agendamentos, setAgendamentos] = useState(() => {
    const salvos = localStorage.getItem("agendamentos");
    return salvos ? JSON.parse(salvos) : [];
  });

  // salva no navegador sempre que a lista muda
  useEffect(() => {
    localStorage.setItem("agendamentos", JSON.stringify(agendamentos));
  }, [agendamentos]);

  // recebe os dados do formulário e adiciona na lista
  function salvarAgendamento(dados) {
    const novoAgendamento = {
      ...dados,
      id: Date.now(),
      status: "confirmado"
    };

    setAgendamentos((prev) => [...prev, novoAgendamento]);
  }

  // troca o status só do agendamento clicado
  function mudarStatus(id, novoStatus) {
    setAgendamentos((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: novoStatus } : a))
    );
  }

  // remove o agendamento clicado
  function excluirAgendamento(id) {
    setAgendamentos((prev) => prev.filter((a) => a.id !== id));
  }

  return (
    <div className="min-h-screen bg-creme font-texto text-gray-800">
      {/* faixa listrada do topo */}
      <div className="faixa-barbearia"></div>

      {/* topo azul */}
      <header className="bg-azul">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap gap-4 justify-between items-center">
          <Cabecalho />
          <StatusLoja aberto={true} />
        </div>
      </header>

      {/* computador: agenda à esquerda e formulário à direita / celular: um embaixo do outro */}
      <main className="max-w-6xl mx-auto px-6 py-10 grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* formulário */}
        <section className="lg:order-2 bg-white border-t-[6px] border-vermelho rounded-md shadow-lg p-6 flex flex-col gap-4 h-fit">
          <h2 className="font-titulo text-xl uppercase tracking-wider text-azul">
            Novo agendamento
          </h2>
          <NovoAgendamento salvarAgendamento={salvarAgendamento} />
        </section>

        {/* agenda */}
        <section className="lg:order-1 flex flex-col gap-4">
          <div className="flex justify-between items-baseline">
            <h2 className="font-titulo text-2xl uppercase tracking-wider text-azul">
              Agenda
            </h2>
            <p className="text-gray-500">{agendamentos.length} agendamento(s)</p>
          </div>

          {agendamentos.length === 0 && (
            <p className="border-2 border-dashed border-gray-300 rounded-md p-10 text-center text-gray-500">
              Nenhum agendamento
            </p>
          )}

          {/* um card para cada agendamento */}
          <div className="flex flex-col gap-3">
            {agendamentos.map((item) => (
              <AgendamentoCard
                key={item.id}
                agendamento={item}
                mudarStatus={mudarStatus}
                excluirAgendamento={excluirAgendamento}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
