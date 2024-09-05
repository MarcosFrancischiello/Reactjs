import React, { useContext } from 'react'
import '../ItemDetail/ItemDetail.css'
import { Link } from 'react-router-dom'
import ItemCount from '../../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({producto}) =>{
    const {addCart} = useContext(CartContext)

    const {id, image, title, price, description} = producto
    const handleComprar = (count) =>{
        addCart({...producto, cantidad: count})
    }
    return (
    <div className='buy-card'>
        <h3>{title}</h3>
        <img src={image} alt={ 'foto del producto ${title}'}/>
        <p>{price}</p>
        <p>{description}</p>
        <ItemCount id={id} handleComprar={handleComprar}/>
    </div>
)
}


export default ItemDetail