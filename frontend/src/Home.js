import React, { useState } from "react";
import { Products, Navbar, loginForm } from "./components";
import Home1 from "./components/home";
import Navbarnew from "./components/Navbar/Navbarnew";
import image from "./Assets/2.jpg";

// import ProductsN from "./components/Products/ProductsN";
export default function Home(props) {
  const [products, setProducts] = useState([]);

  // const fetchProducts =async () =>{
  //   const{data}= backend resposne ravali
  // setProducts(data);
  // }
  return (
    <>
      {/* <Navbarnew /> */}
      <Home1 />
    </>
  );
}
