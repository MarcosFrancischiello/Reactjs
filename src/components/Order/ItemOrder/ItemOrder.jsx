import React from 'react'
import './ItemOrder.css'
const ItemOrder = ({producto}) => {
  return (
    <div className='OrderItem'>
      <img src={producto.image} alt="" />
      <h4>{producto.title}</h4>
      <p>Cantidad: {producto.cantidad}</p>
      <p>Precio: ${producto.price}</p>
      <p>Subtotal: ${producto.subtotal}</p>
        </div>
  )
}

export default ItemOrder