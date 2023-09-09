import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Product from "../pages/SingleProduct/Product";

const Routerss = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="product/:id" element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Routerss;
