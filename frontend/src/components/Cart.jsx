import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delFromCart } from "../redux/action/index";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartBtn, setCartBtn] = useState("ADD TO CART");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const state = useSelector((state) => state.addToCart);
  // const dispatch = useDispatch();

  // const handleClose = (item) => {
  //   dispatch(delFromCart(item));
  // };
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${1}`);
      setProduct(await response.json());
      setLoading(false);
    };

    getProduct();
  }, []);

  const cartItems = (cartItem) => {
    return <></>;
  };
  return (
    <>
      {" "}
      <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={product.img}
                alt={product.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{product.title}</h3>
              <p className="lead fw-bold">${product.price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
