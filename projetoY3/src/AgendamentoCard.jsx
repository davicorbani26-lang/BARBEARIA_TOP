function AgendamentoCard({ agendamento, servicos }) {

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
    <div>
      <h2>{agendamento.nome}</h2>
      <p>Telefone: {agendamento.telefone}</p>
      <p>Serviço: {agendamento.servico}</p>
      <p>Preço: {precoFormatado}</p>
      <p>Duração: {servicoEncontrado.duracao} min</p>
      <p>Data: {dataFormatada}</p>
      <p>Horário: {agendamento.horario}</p>
    </div>
  )
}

export default AgendamentoCard