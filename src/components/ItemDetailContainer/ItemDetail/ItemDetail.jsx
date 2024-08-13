import React from 'react'
import '../../ItemListContainer/Item/Item.css'
import { Link } from 'react-router-dom'
import ItemCount from '../../ItemCount/ItemCount'

const ItemDetail = ({producto, mostrarSiguiente, mostrarAnterior}) =>{

    const {id, image, title, price, description} = producto
    return (
    <div className='product-card'>
        <h3>{title}</h3>
        <img src={image} alt={ 'foto del produtcto ${title}'}/>
        <p>{price}</p>
        <p>{description}</p>
        <button className='btn' onClick={mostrarAnterior}>ver anterior</button>
    <button className='btn' onClick={mostrarSiguiente}>ver siguiente</button>
    <ItemCount id={id}/>
    </div>
)
}


export default ItemDetail