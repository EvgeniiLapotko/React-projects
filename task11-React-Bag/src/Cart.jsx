import React from "react";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { useGlobalContext } from "./context";

const Cart = ({ title, price, img, amount, id }) => {
    const { remove, decrease, increase } = useGlobalContext();

    return (
        <div className="cart__item">
            <div className="cart__item-box">
                <div className="cart__item-img">
                    <img src={img} alt={title} />
                </div>
                <div className="cart__item-info">
                    <div className="cart__item-title">{title}</div>
                    <div className="cart__item-price">${price}</div>
                    <button
                        className="cart__item-btn"
                        onClick={() => remove(id)}
                    >
                        remove
                    </button>
                </div>
            </div>

            <div className="cart__item-count">
                <RiArrowUpSLine
                    className="arrowUp"
                    onClick={() => increase(id)}
                />
                <p className="cart__item-amount">{amount}</p>
                <RiArrowDownSLine
                    className="arrowDown"
                    onClick={() => decrease(id)}
                />
            </div>
        </div>
    );
};

export default Cart;
