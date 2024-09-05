import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { useNavigate, useParams } from "react-router-dom"
import { db } from '../../services/firebaseConfig'
import { getDoc, doc } from 'firebase/firestore'


export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchProducto = async () => {
            const productRef = doc(db, "productos", id)
            const res = await getDoc(productRef)
            const data = res.data()
            const productForm = {id:res.id, ...data}
            setProducto(productForm)
        }
        fetchProducto()
    },[ id])



    return (
    <>
    {

        <ItemDetail producto={producto}/>
    }</>
)
}

export default ItemDetailContainer