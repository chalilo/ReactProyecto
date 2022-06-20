function Input({name,id,title}){
    return(
        <>
        <label for={name}>{title}</label>
        <input type="text" name={name} id={id}/>
        </>
    )
}

export default Input;