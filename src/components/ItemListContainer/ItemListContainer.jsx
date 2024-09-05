import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import Item from './Item/Item'
import { useParams } from "react-router-dom"
import { db } from '../../services/firebaseConfig'
import { collection, getDocs, query, where, addDoc} from 'firebase/firestore'



const ItemListContainer = ({}) => {
    const [productos, setProductos] = useState([])
    const {categoryName} = useParams()

    useEffect(() => {
        if(categoryName){
            const categoryProducts= query(collection(db, "productos"), where("category", "==", categoryName))
            getDocs(categoryProducts).then(snapshot=>{
                const prods = snapshot.docs.map(doc=>{
                const data = doc.data()
                    return {...data, id:doc.id}
                })
                setProductos(prods)
            })
    }else{
        const productsRef = collection(db, "productos")
        getDocs(productsRef).then(snapshot=>{
            const prods = snapshot.docs.map(doc=>{
            const data = doc.data()
                return {...data, id:doc.id}
            })
            setProductos(prods)
        })
    }
}, [categoryName])



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