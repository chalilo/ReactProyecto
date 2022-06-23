function Input({name,id,title}){
    return(
        <>
        <label for={name}>{title}</label>
        <input type="text" name={name} id={id}/>
        <p>nombre:{name} id:{id} titulo{title}</p>
        <input type='submit' value="Enviar"/>
        </>
    )
}


export default Input;