import "./App.css";
import Header from "./components/Header";
import StoreInfo from "./components/StoreInfo";
import OneProduct from "./components/OneProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Product from "./components/Product";
import { ContextProvider } from './Context/Context'

function App() {

  return (
    <ContextProvider>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StoreInfo></StoreInfo>}></Route>
          <Route path="/products" element={<Product></Product>}></Route>
          <Route
            path="/oneProduct/:id"
            element={<OneProduct></OneProduct>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
