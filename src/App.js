import React, { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import ProductList from './components/Product/ProductList'
import Sidebar from './components/sidebar/sidebar'

function App() {
  const [cartItem, setCartItem] = useState(0)
  const onAdd = () => {
    setCartItem(cartItem + 1)
  }
  return (
    <div className="app">
      <Header cartItem={cartItem} />
      <div className="container">
        <Sidebar />
        <ProductList onAdd={onAdd} />
      </div>
    </div>
  )
}

export default App
