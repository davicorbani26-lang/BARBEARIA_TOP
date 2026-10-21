function Addagendamento(){
    return(
        <div className="flex gap-4 w-full justify-center items-center">
            <input placeholder="nome" className="input input-sm rounded full w-[70%]"/>
            <button className="btn btn-primary btn-circle btn-sm">
                +
            </button>
        </div>
    )
}

export default Addagendamento;