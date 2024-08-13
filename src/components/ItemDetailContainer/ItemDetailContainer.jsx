import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { useNavigate, useParams } from "react-router-dom"

const ItemDetailContainer = ({}) => {
    const { id } = useParams()
    const [productos, setProductos] = useState([])
    const {categoryName} = useParams()

    useEffect(() => {
        if(categoryName){
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then(data => data.json())
            .then(json => setProductos(json))
        
    }else{
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(res => setProductos(res))
    }
}, [categoryName]);


    return (
        <div className="tienda">
        {productos.map((el) => {
            return (
            <ItemDetail key={el.id} producto={el} />
            )
        })}
        </div>
)
}

export default ItemDetailContainer