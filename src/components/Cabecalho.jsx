// nome da barbearia no topo
function Cabecalho() {
  return (
    <div>
      <h1 className="font-titulo text-4xl md:text-5xl font-bold uppercase tracking-widest text-creme">
        Barbearia Show
      </h1>

      <p className="text-xs uppercase tracking-[0.3em] font-semibold text-creme/80 mt-1">
        Agendar horários
      </p>
    </div>
  );
}

export default Cabecalho;
