import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import ItemCarrito from './ItemCarrito/ItemCarrito'
import { Link } from 'react-router-dom'
import './Carrito.css'
const Carrito = () => {

    const {cart, vaciarCarrito, totalCarrito} = useContext(CartContext)


return (
    <div className='cartButtons'>
                {cart.length > 1 &&<button onClick={vaciarCarrito}>Vaciar Carrito</button>}
    <div className='cartContainer'>

{
    cart?.map(e=> {
        return(
            <ItemCarrito key={e.id} producto={e}/>
        )
    }
    )
}
    </div>
    <h3>Total del Carrito: ${totalCarrito().toFixed(2)}</h3>
    {cart.length > 0 && <Link to="/checkout"><button>Terminar compra</button></Link>}
    </div>
)
}

export default Carrito