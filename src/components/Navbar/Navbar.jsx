import React from 'react'
import './Navbar.css'
import CartWidget from './CartWidget/CartWidget'
const Navbar = () => {

    return (
    <div className='navbar'>
        <h1>Tienda de ropa</h1>
        <ul><li>
        <a href="">Home</a>
        <a href="">Nosotros</a>
        <a href="">Contacto</a>
        </li></ul>
        <CartWidget/>
        </div>
    )
}

export default Navbar
