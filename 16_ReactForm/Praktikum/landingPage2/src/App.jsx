import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Create from "./layouts/Create";
import Home from "./layouts/Home";
import RegistrationForm from "./pages/RegisterForm";
import LoginForm from "./pages/LoginForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/createproduct"} element={<Create />} />
        <Route path="/Product/:id" element={<ProductDetail />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
