import React from "react";
import SignIn from "./components/loginForm/Signin";
import SignUp from "./components/loginForm/SignUp";
// import { Products, Navbar, loginForm } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbarnew from "./components/Navbar/Navbarnew";
import ProductsN from "./components/Products/ProductsN";
import ProductN from "./components/Products/Product/ProductN";
import Cart from "./components/Cart";
import AddressForm from "./components/Checkout/AddressForm";
import AdminHome from "./components/adminDashboard/adminHome";
import Checkout from "./components/Checkout/Checkout";
import About from "./components/About"
const App = () => {
  return (
    // <div>

    <BrowserRouter>
      <Navbarnew />
      <Routes>
        {/* <Route path="/login" component={SignIn} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/forget" component={SignUp} exact /> */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget" element={<SignUp />} />
        <Route path="/products" element={<ProductsN />} />
        <Route path="/products/:id" element={<ProductN />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About/>} />
        {/* <Route path="/login" element={<SignIn />} /> */}
        {/* <Route path="/forget" component={SignUp} exact /> */}
      </Routes>
    </BrowserRouter>

    // <div>
    //   {/* <Navbar /> */}
    //   {/* <SignIn /> */}
    //   <SignUp />
    //   {/* <Products />  */}
    // </div>
  );
};

export default App;
