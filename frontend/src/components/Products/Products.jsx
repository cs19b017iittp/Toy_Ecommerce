import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import dp from "../../Assets/logo1.jpeg";

import useStyles from "./styles";
const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Shoes",
    price: "RS 2999",
    image: dp,
  },
  {
    id: 2,
    name: "jeans",
    description: "Jeans",
    price: "RS 2999",
    image: dp,
  },
  { id: 3, name: "Shirt", description: "Shirt", price: "RS 2999", image: dp },
  {
    id: 4,
    name: "iphone13 ",
    description: "Iphone",
    price: "RS 2999",
    image: dp,
  },
  {
    id: 5,
    name: "MacBook",
    description: "MacBook",
    price: "RS 2999",
    image: dp,
  },
  {
    id: 6,
    name: "MacBookPro",
    description: "MacBookPro",
    price: "RS 2999999",
    image: dp,
  },
  {
    id: 6,
    name: "MacBookPro",
    description: "MacBookPro",
    price: "RS 2999999",
    image: dp,
  },
  {
    id: 6,
    name: "MacBookPro",
    description: "MacBookPro",
    price: "RS 2999999",
    image: dp,
  },
  {
    id: 6,
    name: "MacBookPro",
    description: "MacBookPro",
    price: "RS 2999999",
    image: dp,
  },
  {
    id: 6,
    name: "MacBookPro",
    description: "MacBookPro",
    price: "RS 2999999",
    image: dp,
  },
  {
    id: 6,
    name: "MacBookPro",
    description: "MacBookPro",
    price: "RS 2999999",
    image: dp,
  },
  {
    id: 6,
    name: "MacBookPro",
    description: "MacBookPro",
    price: "RS 2999999",
    image: dp,
  },
  {
    id: 6,
    name: "MacBookPro",
    description: "MacBookPro",
    price: "RS 2999999",
    image: dp,
  },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" sapcing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
