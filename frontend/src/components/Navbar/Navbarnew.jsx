import React from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import { useSelector } from "react-redux";
const Navbarnew = () => {
  const classes = useStyles();
  const state = useSelector((state) => state.handleCart);
  console.log(state);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white py-2 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="#">
            A2Z Stores
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Contact
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success me-2" type="submit">
                Search
              </button>
            </form>
          </div>
          {/* <div> </div> */}
          <div className="buttons">
            <NavLink to="./signin" className="btn btn-outline-dark me-2">
              <i className="fa fa-sign-in me-1"></i>LOGIN
            </NavLink>
          </div>
          <div className="buttons">
            <NavLink to="./signin" className="btn btn-outline-dark me-2">
              <i className="fa fa-user me-1"></i>
            </NavLink>
          </div>

          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton
              href="./cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={state.length} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbarnew;
