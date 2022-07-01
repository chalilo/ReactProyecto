const Item = ({item}) =>{
    return(
        <div>
            <h3>{item.title}</h3>
            <img src={item.pictureURL} alt={item.alt}/>
            <p>${item.price}</p>
        </div>
    )
}

export default Item;