import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'
import './Checkout.css'


const Checkout = () => {

  const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [direccion, setDireccion] = useState("")
    const [celular, setCelular] = useState("")
    const [orden, setOrden] = useState("")
    const [isSumbmiting, setIsSubmiting] =  useState(false)

    const { cart, setCart, totalCarrito } = useContext(CartContext)

    const handleSubmit = async (e) => {
      e.preventDefault()
      setIsSubmiting(true)

      const usuario = {
          email,
          nombre,
          celular,
          direccion
      }
      const orden = {
          cart, 
          usuario,
          total:totalCarrito()
      }
      const orderRef = collection(db, "ordenes")
      const orderID = await addDoc(orderRef, orden)
      setOrden(orderID.id)
      setIsSubmiting(false)
      setDireccion("")
      setEmail("")
      setNombre("")
      setCelular("")
      setCart([])
  }
  if (orden) {
    return (
        <h1>
            Gracias por tu elegirnos, el id de tu compra es {orden}
        </h1>
    )
}
  return (
    <div className='formCheckout'>
        <h2>Checkout</h2>
        <form action="form" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="email" onSubmit={()=> handleSubmit()}>Email</label>
            <input type="email" name='email' required onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name='nombre' required onChange={(e) => setNombre(e.target.value)}/>
            <label htmlFor="direccion">Direccion</label>
            <input type="text" name='direccion' required onChange={(e) => setDireccion(e.target.value)}/>
            <label htmlFor="celular">Celular</label>
            <input type="text" pattern="\d*" name='celular' placeholder="Ingrese solo números" required onChange={(e) => setCelular(e.target.value)}/>
            <button type='submit' disabled={isSumbmiting}>Confirmar Compra</button>
        </form>
        
    </div>
  )
}
export default Checkout