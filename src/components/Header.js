import React from "react";
import '../App.css';
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from '../assets/Logo.png';

export default function Header() {
    return(
        <div className="header">
            <Link to="/PicShop">
                <img src={logo} alt="logo" />
            </Link>
            <Link to="/PicShop/cart">
                <BsCart3 size={31} color="black" className="cart" />
            </Link>
        </div>
    )
}