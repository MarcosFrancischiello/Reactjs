import React, { useContext } from 'react'
import './CartWidget.css'
import ItemCount from '../../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const {cantidadItem} = useContext(CartContext)
    return (
    <div className='CartWidget'>
        🛒
        <span>{cantidadItem()}</span>
        </div>
)
}

export default CartWidget