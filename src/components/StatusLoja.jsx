// etiqueta "Aberto agora" ou "Fechado"
function StatusLoja({ aberto }) {
  return (
    <p
      className={
        aberto
          ? "bg-vermelho text-white text-sm font-semibold px-4 py-2 rounded"
          : "bg-gray-500 text-white text-sm font-semibold px-4 py-2 rounded"
      }
    >
      {aberto ? "Aberto agora" : "Fechado"}
    </p>
  );
}

export default StatusLoja;
