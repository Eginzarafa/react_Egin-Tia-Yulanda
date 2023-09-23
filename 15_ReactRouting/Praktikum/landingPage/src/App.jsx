import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from './layouts/Home'
import ProductDetail from "./components/ProductDetail";
import Create from "./layouts/Create";
import Home from "./layouts/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/createproduct"} element={<Create />} />
        <Route path="/Product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
