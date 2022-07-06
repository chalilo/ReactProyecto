const Item = ({item}) =>{
    return(
        <div>
            <h4>{item.title}</h4>
            <img src={item.pictureURL} alt={item.alt}/>
            <p>${item.price}</p>
            <button onClick={()=>console.log("a")}>Ver más</button>
        </div>
    )
}

export default Item;