import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutPage from "./layout/LayoutPage";
import Checkout from "./pages/Checkout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import ShopPage from "./pages/ShopPage";
import ShoppingCart from "./pages/ShoppingCart";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <Routes>
      <Route element={<LayoutPage></LayoutPage>}>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/shop" element={<ShopPage></ShopPage>} />
        <Route path="/product/:slug" element={<ProductPage></ProductPage>} />
        <Route path="/cart" element={<ShoppingCart></ShoppingCart>} />
        <Route path="/checkout" element={<Checkout></Checkout>} />
      </Route>
      <Route path="/login" element={<Login></Login>} />
      <Route path="/signup" element={<SignUp></SignUp>} />
      <Rou
    </Routes>
  );
}

export default App;
