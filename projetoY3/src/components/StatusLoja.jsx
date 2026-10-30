
function StatusLoja({ aberto }) {
  return (
    <p
      className={
        aberto
          ? "text-success font-bold"
          : "text-error font-bold"
      }
    >
      {aberto ? "Aberto agora" : "Fechado"}
    </p>
  );
}

export default StatusLoja;
