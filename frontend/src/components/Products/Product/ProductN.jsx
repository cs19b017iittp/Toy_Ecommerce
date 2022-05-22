import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/action/index";
const ProductN = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartBtn, setCartBtn] = useState("ADD TO CART");

  const dispatch = useDispatch();
  const addProduct = (product) => {
    if (cartBtn === "ADD TO CART") {
      dispatch(addToCart(product));
      setCartBtn("GO TO CART");
    } else {
      setCartBtn("ADD TO CART");
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      // const response = await fetch(`http://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };

    getProduct();
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} width={300} />
          <Skeleton height={75} width={300} />
          <Skeleton height={50} width={300} />
        </div>
      </>
    );
  };
  const ShowProduct = () => {
    return (
      <>
        <div classname="container my-5 py-3">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center mx-auto product">
              <img
                src={product.image}
                alt={product.title}
                height="400px"
                width="400px"
              />
            </div>
            <div className="col-md-6">
              <h4 className="text-uppercase text-black-50">
                {product.category}
              </h4>
              <h1 className="diaplay-5">{product.title}</h1>
              <p className="lead fw-bolder">
                Rating {product.rating && product.rating.rate}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
              <p className="lead">{product.description}</p>
              <button className="btn btn-outline-dark px-4 py-2">
                BUY NOW
              </button>
              <button
                className="btn btn-outline-dark ms-2 px-3 py-2"
                onClick={() => addProduct(product)}
              >
                {cartBtn}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default ProductN;
