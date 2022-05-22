import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delFromCart } from "../redux/action/index";

const Cart = () => {
  const state = useSelector((state) => state.addToCart);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delFromCart(item));
  };

  const cartItems = (cartItem) => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
          <div className="container">
            <button
              onClick={() => handleClose(cartItem)}
              className="btn-close float-end"
              area-aria-label="Close"
            ></button>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={cartItem.img}
                  alt={cartItem.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h3>{cartItem.title}</h3>
                <p className="lead fw-bold">${cartItem.price}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return <>{state.length !== 0 && state.map(cartItems)}</>;
};

export default Cart;
