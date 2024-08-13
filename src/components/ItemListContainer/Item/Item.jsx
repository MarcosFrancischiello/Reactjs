import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
const Item = ( props ) =>{

    const {producto} = props

    const {id, image, title, price, description} = producto
    return (
    <div className='product-card'>
        <h3>{title}</h3>
        <img src={image} alt={ 'foto del produtcto ${title}'}/>
        <p>{price}</p>
        <Link to={`/detalle/${id}`} className='btn'>Comprar</Link>
    </div>
)
}


export default Item