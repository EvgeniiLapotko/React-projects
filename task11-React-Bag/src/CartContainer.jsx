import React from "react";
import { useGlobalContext } from "./context";
import Cart from "./Cart";

const CartContainer = () => {
    const { cart, total, clearCart } = useGlobalContext();
    // const total = cart.reduce((sum, item) => {
    //     return (sum = sum + +item.price);
    // }, 0);
    // console.log(total);
    if (cart.length === 0) {
        return (
            <div className="title-cart">
                <h4>No products in Bag</h4>
            </div>
        );
    }
    return (
        <div className="container">
            <h1 className="title">Your bag</h1>
            <div className="cart__inner">
                {cart.map((item) => {
                    return <Cart key={item.id} {...item} />;
                })}
            </div>
            <div className="total">
                <div className="total-title">Total:</div>
                <div className="total-price">${total}</div>
            </div>
            <button className="btn" onClick={clearCart}>
                Clear All
            </button>
        </div>
    );
};

export default CartContainer;
