import React, { useEffect, useState } from 'react'
import './Navbar.css'
import CartWidget from './CartWidget/CartWidget'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [categorias, setCategorias] = useState([])


    useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategorias(json))
            .finally()
    }, [])

    return (
    <nav>
        <Link to="/">
        <h1>Mi tiendita!</h1>
        </Link>
        <ul>
            {
            categorias.length > 0 && categorias.map(e => <Link key={e} to={`/categoria/${e}`}>{e + " "}</Link>)
            }    
        </ul>
        <CartWidget />
    </nav>
    
    
    )
}

export default Navbar
