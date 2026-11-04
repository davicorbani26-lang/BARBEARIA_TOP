import { useState } from "react";
import servicos from "./data/servicos";

const horários = [
  "09:00", "11:00", "13:00", "15:00", "16:00"
];

function NovoAgendamento({ salvarAgendamento }) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [servico, setServico] = useState(servicos[0].nome);
  const [data, setData] = useState("");
  const [horário, setHorario] = useState("");

  function agendar() {
    if (!nome.trim() || !telefone.trim() || !data || !horário) {
      alert("Preencha todos os campos!");
      return;
    }

    salvarAgendamento({
      nome: nome.trim(),
      telefone: telefone.trim(),
      servico: servico,
      data: data,
      horário: horário,
    });

    setNome("");
    setTelefone("");
    setData("");
    setHorario("");
  }

  return (
    <div className="flex flex-col gap-3 w-full max-w-md">

      <input
        type="text"
        placeholder="Nome do cliente"
        className="input input-bordered w-full"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        type="tel"
        placeholder="Telefone do cliente"
        className="input input-bordered w-full"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />

      <input
        type="date"
        className="input input-bordered w-full"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <div className="flex flex-wrap gap-2">
        {horários.map((h) => (
          <button
            key={h}
            type="button"
            className={
              horário === h
                ? "btn btn-sm btn-primary"
                : "btn btn-sm btn-outline"
            }
            onClick={() => setHorario(h)}
          >
            {h}
          </button>
        ))}
      </div>

      <select
        className="select select-bordered w-full"
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
        className="btn btn-primary"
        onClick={agendar}
      >
        Agendar
      </button>

    </div>
  );
}

export default NovoAgendamento;