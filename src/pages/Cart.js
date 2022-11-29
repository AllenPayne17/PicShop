import React, { useContext } from "react";
import Header from '../components/Header';
import { Context } from "../Context";
import CartItem from "../components/CartItem";

export default function Cart() {

    const { cartItem } = useContext(Context)

    const Items = cartItem.map(item => (
        <CartItem key={item.id} {...item} />
    ))

    const display_checkout = () => {
        return cartItem.length !== 0 ? <h1>Check out</h1> : <h3>You have no items in your cart.</h3>
    }

    return(
        <>
        <Header />
        <div className="cart-container">
            {display_checkout()}
            {Items}
        </div>
        </>
    )
}
