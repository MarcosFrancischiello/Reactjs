import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const ItemCarrito = ({producto}) => {

    const {eliminarProducto} = useContext(CartContext)

    return (
        <div className='product-card'>
            <h3>{producto.title}</h3>
            <img src={producto.image} alt={ 'foto del produtcto ${producto.title}'}/>
            <p>Cantidad:<br />{producto.cantidad}</p>
            <p>Total:<br />{(producto.cantidad*producto.price).toFixed(2)}</p>
            <button onClick={()=>eliminarProducto(producto.id)}>Eliminar Producto</button>
        </div>
)
}

export default ItemCarrito