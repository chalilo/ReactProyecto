import { useState, useEffect, Component } from "react";

/*const MiComponente = ({miProp}) => {
    const [contador, setContador] = useState(0);
    const [numero,setNumero] = useState(0);
    const [categoria,setCategoria] = useState("todo");
    const [show,setShow] = useState(true);

    useEffect(() => {
        console.log("Se ejecuta el useEffect");
        setNumero(numero + 1)
    },[contador])

    const handlerClickSR = (a) =>{
        setContador(contador + (1 * a))
    }
    const handlerClickRestart = () =>{
        setContador(0)
    }
    const cambiarCat = (a) =>{
        a == 0 && setCategoria("Cuerdas de guitarra")
        a == 1 && setCategoria("Cuerdas de bajo")
        a == 2 && setCategoria("Herramientas")
    }
    return(
        <>
            <h1>{miProp}</h1>
            <h3>{contador}</h3>
            <button onClick={() => handlerClickSR(1)}>Sumar</button>
            <button onClick={() =>handlerClickSR(-1)}>Restar</button>
            <button onClick={handlerClickRestart}>Reiniciar</button>
            <h2>{numero}</h2>
            <h2>Categoria: {categoria}</h2>
            <button onClick={()=>cambiarCat(0)}>Cuerdas de guitarra</button>
            <button onClick={()=>cambiarCat(1)}>Cuerdas de bajo</button>
            <button onClick={()=>cambiarCat(2)}>Herramientas</button><br/>
            {show
                ? <h2>Oculto</h2>
                : <h2>Visible</h2>}
            <button onClick={()=> setShow(!show)}>a</button>
        </>
    )
}

const array = [0,1,2];

const [cero,uno,dos] = array;

console.log(cero,uno,dos);*/

const MiComponente = () =>{
    function SuperButton({buttonText}) {
        function doSomething(){
            console.log("Hello World");
        }
        return <button type="button" onClick={doSomething}>{buttonText}</button>
    }
    function SuperForm(props) {
        console.log(props);
        return(
            <>
            <h1>{props.title}</h1>
            {props.render({buttonText: "a"})}
            </>
        )
    }
    const StateApp=()=>{
        const state = "Esta funcion morira al finalizar"
        return <p>{state}</p>
    }
    return(
        <>
        <SuperForm title="Bon voyage" render={SuperButton}/>
        <StateApp/>
        </>
    )
}

export default MiComponente;