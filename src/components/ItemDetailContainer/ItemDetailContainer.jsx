import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { useNavigate, useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const { id } = useParams()
    const navigate = useNavigate();

    const mostrarSiguiente = () =>{
        let ruta = id*1 + 1
        navigate(`/detalle/${ruta}`)
    }
    const mostrarAnterior = () =>{
        if(id > 0){
            let ruta = id*1 - 1
            navigate(`/detalle/${ruta}`)
        }
    }

    useEffect(() => {
        const fetchProducto = async () => {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await res.json()
            setProducto(data)
        }
        fetchProducto()
    },[ id])
    return (
    <>
    {

        <ItemDetail producto={producto} mostrarSiguiente={mostrarSiguiente} mostrarAnterior={mostrarAnterior}/>
    }</>
)
}

export default ItemDetailContainer