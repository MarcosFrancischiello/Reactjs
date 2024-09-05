import React, { useEffect, useState } from 'react'
import './Navbar.css'
import CartWidget from './CartWidget/CartWidget'
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';

const Navbar = () => {
    const [categorias, setCategorias] = useState([])


    useEffect(() => {
        const obtenerCategorias = async () => {
            const productosSnapshot = await getDocs(collection(db, 'productos')); // Ajusta 'productos' al nombre de tu colección
            const productos = productosSnapshot.docs.map(doc => doc.data());
    
            // Extrae categorías únicas de los productos
            const categoriasUnicas = [...new Set(productos.map(producto => producto.category))];
    
            // Actualiza el estado con las categorías únicas
            setCategorias(categoriasUnicas);

        };
    
        obtenerCategorias();
    }, []);
    
    return (
    <nav>
        <Link to="/">
        <h1>Mi tiendita!</h1>
        </Link>
        <ul>
        {categorias.length > 0 && categorias.map(e => (
        <Link className='Nav-link' key={e} to={`/categoria/${e}`}>
        {e}
        </Link>
    ))}
            <Link to='/carrito'>
            <CartWidget/>   
            </Link> 
            <Link to='/order' className='Nav-link'>
            Seguimiento
            </Link>
        </ul>
    </nav>
    
    
    )
}

export default Navbar
