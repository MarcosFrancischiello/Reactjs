import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import Item from '../Item/Item'
import { useParams } from "react-router-dom"
const ItemListContainer = ({}) => {
    const [productos, setProductos] = useState([])
    const {categoryName} = useParams()

    useEffect(() => {
        if(categoryName){
            fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
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
            <Item key={el.id} producto={el} />
            )
        })}
        </div>
)
}

export default ItemListContainer