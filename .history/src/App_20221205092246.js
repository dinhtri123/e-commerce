import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import LayoutPage from "./layout/LayoutPage";
import Checkout from "./pages/Checkout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import ProductDetailPage from "./pages/ProductDetailPage";
import ShopPage from "./pages/ShopPage";
import ShoppingCart from "./pages/ShoppingCart";
import SignUp from "./pages/SignUp";
function App() {
  const cartItems = useSelector(state => state.cart.cartItems)
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
   },[cartItems])
  return (
    <Routes>
      <Route element={<LayoutPage></LayoutPage>}>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/shop" element={<ShopPage></ShopPage>} />
        <Route path="/product/:slug" element={<ProductDetailPage></ProductDetailPage>} />
        <Route path="/cart" element={<ShoppingCart></ShoppingCart>} />
        <Route path="/checkout" element={<Checkout></Checkout>} />
      </Route>
      <Route path="/login" element={<Login></Login>} />
      <Route path="/signup" element={<SignUp></SignUp>} />
    </Routes>
  );
}

export default App;
