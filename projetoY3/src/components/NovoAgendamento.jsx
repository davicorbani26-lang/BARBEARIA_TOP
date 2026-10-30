
import { useState } from "react";

function NovoAgendamento({ salvarAgendamento }) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  function agendar() {
    if (!nome.trim() || !telefone.trim()) {
      alert("Preencha o nome e o telefone!");
      return;
    }

    salvarAgendamento({
      nome: nome.trim(),
      telefone: telefone.trim(),
    });

    setNome("");
    setTelefone("");
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
