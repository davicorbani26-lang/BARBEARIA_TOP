function App() {

const clientes = 0
const aberto_fechado = true 

  return(
    <div className="flex h-screen justify-center items-center">
      <div className="card w-[80%] lg:w-[50%] h-[70%] shadow-md rounded-sm items-center p-10 gap-5">
        <h1>
          Barber 
        </h1>

      <p>{clientes === 0 ? "Nenhum cliente agendou ainda" : clientes + " clientes agendaram para hoje"}</p>
      <p>{aberto_fechado === true  ? "A loja esta aberta" : "A loja esta fechada"}</p>
      <Addagendamento/>

      </div>
    </div>
  ) 
}

export default App


