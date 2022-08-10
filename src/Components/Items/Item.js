import { Link } from "react-router-dom";
const Item = ({item}) =>{
    const URL = "/item/"+item.id;
    return(
        <div>
            <h4>{item.title}</h4>
            <img src={item.pictureURL} alt={item.alt}/>
            <p>${item.price}</p>
            <Link to={URL}><button className="itemInfBtn">Ver más</button></Link>
        </div>
    )
}

export default Item;