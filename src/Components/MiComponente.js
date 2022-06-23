import { useState } from "react";

const MiComponente = ({miProp,logeoB}) => {
    const [contador, setContador] = useState(0);
    const [users,setUsers] = useState([{name:"Camilo"},{name:"Felix"}])

    const handlerClickPos = () =>{
        setContador(contador + 1)
        logeoB("Se sumo")
    }
    const handlerClickNeg = () =>{
        setContador(contador - 1)
        logeoB("Se resto")
    }
    const handlerClickRestart = () =>{
        setContador(0)
        logeoB("Se reinicio")
    }
    const handlerAgregar = () =>{
        const Jose = {name:"Jose"}
        console.log(users);
        setUsers([...users,Jose]);
        console.log(users);
    }
    return(
        <>
            <h1>{miProp}</h1>
            <h3>{contador}</h3>
            <button onClick={handlerClickPos}>Sumar</button>
            <button onClick={handlerClickNeg}>Restar</button>
            <button onClick={handlerClickRestart}>Reiniciar</button>
            <button onClick={handlerAgregar}>Agregar Jose</button>
        </>
    )
}

const array = [0,1,2];

const [cero,uno,dos] = array;

console.log(cero,uno,dos);

export default MiComponente;