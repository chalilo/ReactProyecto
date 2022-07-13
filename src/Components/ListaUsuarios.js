const ListaUsuarios = ({usuarios})=>{
    return(
        <>{
            usuarios.map((usuario,index)=><p key={index}>{usuario}</p>)
        }
        </>
    )
}
export default ListaUsuarios;