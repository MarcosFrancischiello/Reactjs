import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error from './components/Error/Error'
import Carrito from './components/Carrito/Carrito'
import {CartContext} from './components/context/CartContext'
import { CartContextProvider } from './components/context/CartContext'
import Checkout from './components/Checkout/Checkout'
import Order from './components/Order/Order'

function App() {
  return(

<CartContextProvider>
<BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoryName' element={<ItemListContainer/>} />
        <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
        <Route path='/carrito' element={<Carrito/>} />
        <Route path='/*' element={<Error/>} />
        <Route path='/checkout' element={<Checkout/>} />  
        <Route path='/order' element={<Order/>} />   
      </Routes>

    
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
