import React, { useEffect, useState } from 'react'
import './ItemCount.css'
const ItemCount = ({id}) =>{
const [ count, setCount] = useState(1)
const sumar = () =>{
    if(count < 10)
    setCount(count + 1 )
}
const restar = () =>{
    if(count > 1 )
    setCount(count - 1 )
}
return (
    <div className='container'>
        <button className='btnItem' fn={restar}>-</button>
        <span>{count}</span>
        <button className='btnItem' fn={sumar}>+</button>
    </div>
)
}
export default ItemCount