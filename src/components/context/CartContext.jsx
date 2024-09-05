import { Children, createContext, useState } from "react"

export const CartContext = createContext()
export const CartContextProvider = ( {children} ) =>{
    const [cart, setCart] = useState([])

    const addCart = (producto) => {
        const { id, cantidad, price } = producto
        const subtotal = (cantidad * price).toFixed(2)
        const existingProduct = cart.find(item => item.id === id)

        if (existingProduct) {
            setCart(cart.map(item => 
                item.id === id 
                ? { ...item, cantidad: item.cantidad + cantidad, subtotal:item.subtotal + subtotal } 
                : item
            ))
        } else {
            setCart([...cart, { ...producto, subtotal }])
        }
    }
    const vaciarCarrito = () =>{
        setCart([])
    }
    const eliminarProducto = (id) => {
        const newCart = cart.filter(e => e.id !== id)
        setCart(newCart)
    }
    const cantidadItem = () =>{
        return cart.reduce((acc, curr) => acc + curr.cantidad, 0)
    }
    const totalCarrito = () => {
        return cart.reduce((acc, curr) => acc + curr.subtotal, 0).toFixed(2)
    }
    return(
        <CartContext.Provider value={{cart, setCart, addCart, vaciarCarrito, eliminarProducto, cantidadItem, totalCarrito}}>
            {children}
        </CartContext.Provider>
    )
}