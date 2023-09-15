import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Product from "../pages/SingleProduct/Product";
import Form from "../components/Forms/Form";

const Routerss = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="product/:id" element={<Product/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="form/:id" element={<Form/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Routerss;
