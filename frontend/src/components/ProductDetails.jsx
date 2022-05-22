import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import DATA from '../Data';
import { useDispatch } from "react-redux";
import {addItem,delItem} from '../redux/action/index';


const ProductDetail = () => {
    const [CartBtn, setCartBtn] = useState("Add to Cart")
    const proid = useParams();
    const proDetail = DATA.filter(x=>x.id == proid.id)
    const product = proDetail[0];
    console.log(product);

    const dispatch = useDispatch()
    
    const handleCart = (product) => {
        if(cartBtn === "Add to Cart"){
            dispatch(addItem(product))
            setCartBtn("Remove from Cart");
        }
        else{
            dispatch(delItem(product))
            setCartBtn("Add to Cart");
        }
    }
}