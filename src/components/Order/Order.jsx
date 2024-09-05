import React, { useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'
import User from './User/User'
import ItemOrder from './ItemOrder/ItemOrder'
import './Order.css'

const Order = () => {
    const [numeroOrden, setNumeroOrden] = useState('')
    const [orden, setOrden] = useState(null)

    const handleBuscarOrden = async () => {
        const docRef = doc(db, 'ordenes', numeroOrden)
        const docSnap = await getDoc(docRef)
    
        if (docSnap.exists()) {
            setOrden(docSnap.data())
        } else {
            console.error('Error al buscar la orden:', e)
        }
}
return (
    <div className='Order'>
        <div className='Orderform'>
        <h2>Ingrese su numero de orden</h2>
        <input type="text"  onChange={(e) => setNumeroOrden(e.target.value)}/>
        <button onClick={handleBuscarOrden}>Buscar</button>
        </div>
        {orden && <div className='OrderContainer'>
            <User usuario={orden.usuario} />
            <div className='OrderProduct'>
            <h2>Productos:</h2>
            {orden.cart.map((producto, index) => (
                        <ItemOrder key={index} producto={producto} total={orden.total}/>
                    ))}
                    <h2>Total de la Orden: ${orden.total}</h2>
                    </div>
            </div>}
</div>
  )
}
export default Order