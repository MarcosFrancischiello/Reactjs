import React from 'react'
import './User.css'
const User = ({usuario}) => {
  return (
    <div className='OrderUsuario'>
      <h2>Detalles del Usuario</h2>
      <p>Nombre: {usuario.nombre}</p>
      <p>Celular: {usuario.celular}</p>
      <p>Dirección: {usuario.direccion}</p>
      <p>Email: {usuario.email}</p>
    </div>
  )
}

export default User