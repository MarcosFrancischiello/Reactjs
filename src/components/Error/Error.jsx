import React from 'react'
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
  return (
    <div className='Error404'>
        <h4>Ups parece que algo salio mal</h4>
        <Link to='/'>
        <button>Volver al inicio</button>
        </Link>
    </div>
  )
}

export default Error