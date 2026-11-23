import { useState } from "react";
import servicos from "./data/servicos";

const horarios = ["09:00", "11:00", "13:00", "15:00", "16:00"];

// classes repetidas dos campos do formulário
const estiloCampo = "w-full bg-creme border-gray-300 focus:border-azul focus:outline-none";

function NovoAgendamento({ salvarAgendamento }) {
  // um estado para cada campo
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [servico, setServico] = useState(servicos[0].nome);
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");

  function agendar() {
    // não deixa agendar com campo vazio
    if (!nome.trim() || !telefone.trim() || !data || !horario) {
      alert("Preencha todos os campos!");
      return;
    }

    // envia os dados para o App
    salvarAgendamento({
      nome: nome.trim(),
      telefone: telefone.trim(),
      servico: servico,
      data: data,
      horario: horario,
    });

    // limpa o formulário
    setNome("");
    setTelefone("");
    setData("");
    setHorario("");
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      <input
        type="text"
        placeholder="Nome do cliente"
        className={"input " + estiloCampo}
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        type="tel"
        placeholder="Telefone do cliente"
        className={"input " + estiloCampo}
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />

      <input
        type="date"
        className={"input " + estiloCampo}
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      {/* botões de horário: o escolhido fica azul */}
      <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mt-1">
        Escolha o horário
      </p>
      <div className="grid grid-cols-5 gap-2">
        {horarios.map((h) => (
          <button
            key={h}
            type="button"
            className={
              horario === h
                ? "btn btn-sm bg-azul border-azul text-white"
                : "btn btn-sm bg-white border-azul text-azul hover:bg-azul hover:text-white"
            }
            onClick={() => setHorario(h)}
          >
            {h}
          </button>
        ))}
      </div>

      {/* serviços vindos do servicos.js */}
      <select
        className={"select " + estiloCampo}
        value={servico}
        onChange={(e) => setServico(e.target.value)}
      >
        {servicos.map((s) => (
          <option key={s.nome} value={s.nome}>
            {s.nome} - R$ {s.preco}
          </option>
        ))}
      </select>

      <button
        className="btn w-full mt-2 bg-vermelho border-none text-white font-titulo text-lg uppercase tracking-widest hover:brightness-90"
        onClick={agendar}
      >
        Agendar
      </button>
    </div>
  );
}

export default NovoAgendamento;
