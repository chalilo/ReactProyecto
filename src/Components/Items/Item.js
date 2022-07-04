import ItemCount from "./ItemCount";

const Item = ({item}) =>{
    const onAdd = (cantidad) =>{
        console.log("SE AGREGO "+cantidad);
    }
    return(
        <div>
            <h4>{item.title}</h4>
            <img src={item.pictureURL} alt={item.alt}/>
            <p>${item.price}</p>
            <ItemCount stock={item.stock} initial={item.initial} onAdd={onAdd}/>
        </div>
    )
}

export default Item;