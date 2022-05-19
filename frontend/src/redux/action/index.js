//add item to cart
export const addToCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

//Delete item from cart
export const delFromCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
