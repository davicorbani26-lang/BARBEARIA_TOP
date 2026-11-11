import servicos from "./data/servicos"

function AgendamentoCard({ agendamento, excluirAgendamento, alterarStatus }) {

  const servicoEncontrado = servicos.find(
    (item) => item.nome === agendamento.servico
  )

  if (!servicoEncontrado) {
    return <p>Serviço não encontrado</p>
  }

  const precoFormatado = servicoEncontrado.preco.toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL"
    }
  )

  const dataFormatada = new Date(
    agendamento.data + "T00:00:00"
  ).toLocaleDateString("pt-BR")

  return (
    <div className="card bg-base-200 p-4 flex flex-col gap-1 w-full">
        <div className="flex justify-between items-center">
            <h2 className="">{agendamento.nome}</h2>
            <span className="bedge">{agendamento.status}</span>
        </div>
      
      <p>Telefone: {agendamento.telefone}</p>
      <p>Serviço: {agendamento.servico}</p>
      <p>Preço: {precoFormatado}</p>
      <p>Duração: {servicoEncontrado.duracao} min</p>
      <p>Data: {dataFormatada}</p>
      <p>Horário: {agendamento.horario}</p>

      <div className="flex gap-2 mt-2 ">
        <button className="btn btn-sn btn-success" onClick={() => alterarStatus(agendamento.id, "Concluido")}>
            Concluir
        </button>

        <button className="btn btn-sn btn-warning" onClick={() => alterarStatus(agendamento.id, "Cancelado")}>
            Cancelar
        </button>

        <button className="btn btn-sn btn-error" onClick={() => excluirAgendamento(agendamento.id, "Cancelado")}>
            Excluir
        </button>
      </div>

   
    </div>

    
  )
}

export default AgendamentoCard;