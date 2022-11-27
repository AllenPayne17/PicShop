import React from "react";
import '../App.css';
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <div className="header">
            <Link to="/">
                <img src={'../Logo.png'} alt="" />
            </Link>
            <Link to="/cart">
                <BsCart3 size={31} className="cart" />
            </Link>
        </div>
    )
}