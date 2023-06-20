import './App.css'
import Header from './components/Header'
import StoreInfo from './components/StoreInfo'
import OneProduct from './components/OneProduct'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Product from './components/Product'

function App() {
  return (
    <>      
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StoreInfo></StoreInfo>}></Route>
          <Route path="/products" element={<Product></Product>}></Route>
          <Route path="/product/:id" element={<OneProduct></OneProduct>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
