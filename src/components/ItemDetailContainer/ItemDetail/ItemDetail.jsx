import React from 'react'
import '../ItemDetail/ItemDetail.css'
import { Link } from 'react-router-dom'
import ItemCount from '../../ItemCount/ItemCount'

const ItemDetail = ({producto, mostrarSiguiente, mostrarAnterior}) =>{

    const {id, image, title, price, description} = producto
    return (
    <div className='buy-card'>
        <h3>{title}</h3>
        <img src={image} alt={ 'foto del produtcto ${title}'}/>
        <p>{price}</p>
        <p>{description}</p>
        <div>
        <button className='btn' onClick={mostrarAnterior}>ver anterior</button>
        <button className='btn' onClick={mostrarSiguiente}>ver siguiente</button>
        </div>
        <ItemCount id={id}/>
    </div>
)
}


export default ItemDetail