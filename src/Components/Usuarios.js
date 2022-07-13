import { useState } from "react";
import ListaUsuarios from "./ListaUsuarios";

const Usuarios = ()=>{
    const [usuario,setUsuario] = useState("")
    const [usuarios,setUsuarios] = useState([])
    const handlerUserChange=(e)=>{
        e.preventDefault()
        const user = document.getElementById("userInput").value
        user ? setUsuario(user) : console.log("Usuario no ingresado");
    }
    const handlerAgregar=(e)=>{
        e.preventDefault()
        const user = document.getElementById("userInput").value
        user ? setUsuarios([...usuarios,user]) : console.log("Usuario no ingresado");
    }
    const vaciarUsuarios=(e)=>{
        e.preventDefault()
        setUsuarios([])
    }
    return(
        <div>
            <h4>Usuario</h4>
            {usuario
            ? <p>{usuario}</p>
            : <p>Invitado</p>}
            <form>
                <input type="text" id="userInput"></input>
                <button onClick={handlerUserChange}>Ingresar</button>
                <button onClick={handlerAgregar}>Agregar</button>
            </form>
            <ListaUsuarios usuarios={usuarios}/>
            <button onClick={vaciarUsuarios}>Vaciar Lista</button>
        </div>
    )
}

export default Usuarios;