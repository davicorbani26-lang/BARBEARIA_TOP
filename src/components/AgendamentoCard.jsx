import servicos from "./data/servicos";

function AgendamentoCard({ agendamento, mudarStatus, excluirAgendamento }) {
  // procura o serviço no cardápio para pegar preço e duração
  const servicoEncontrado = servicos.find(
    (item) => item.nome === agendamento.servico
  );

  if (!servicoEncontrado) {
    return <p>Serviço não encontrado</p>;
  }

  // preço em reais: R$ 35,00
  const precoFormatado = servicoEncontrado.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  // data no formato 25/11/2026 (T00:00:00 evita mostrar o dia anterior)
  const dataFormatada = new Date(
    agendamento.data + "T00:00:00"
  ).toLocaleDateString("pt-BR");

  // cores conforme o status: etiqueta e faixa da esquerda
  let corStatus = "bg-azul text-white";
  let corBorda = "border-azul";
  if (agendamento.status === "concluído") {
    corStatus = "bg-green-100 text-green-700";
    corBorda = "border-green-600";
  }
  if (agendamento.status === "cancelado") {
    corStatus = "bg-red-100 text-vermelho";
    corBorda = "border-vermelho";
  }

  return (
    <div className={"bg-white rounded-md shadow p-5 flex flex-col gap-3 w-full border-l-[6px] " + corBorda}>
      <div className="flex justify-between items-center">
        <h2 className="font-titulo text-xl uppercase tracking-wide text-azul">
          {agendamento.nome}
        </h2>
        <span className={"text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded " + corStatus}>
          {agendamento.status}
        </span>
      </div>

      {/* informações em até 3 colunas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-1 text-sm">
        <p>Telefone: {agendamento.telefone}</p>
        <p>Serviço: {agendamento.servico}</p>
        <p>Data: {dataFormatada}</p>
        <p>Horário: {agendamento.horario}</p>
        <p>Duração: {servicoEncontrado.duracao} min</p>
        <p className="font-bold text-vermelho">Preço: {precoFormatado}</p>
      </div>

      {/* botões: mandam o id para o App */}
      <div className="flex gap-2">
        <button
          className="btn btn-sm bg-azul border-azul text-white"
          onClick={() => mudarStatus(agendamento.id, "concluído")}
        >
          Concluir
        </button>
        <button
          className="btn btn-sm bg-white border-azul text-azul"
          onClick={() => mudarStatus(agendamento.id, "cancelado")}
        >
          Cancelar
        </button>
        <button
          className="btn btn-sm btn-ghost text-vermelho ml-auto"
          onClick={() => excluirAgendamento(agendamento.id)}
        >
          Excluir
        </button>
      </div>
    </div>
  );
}

export default AgendamentoCard;
