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
        <p>{description}</p>
    </div>
)
}


export default Item