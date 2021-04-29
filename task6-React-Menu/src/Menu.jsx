import React from "react";

const Menu = ({ items }) => {
    return (
        <div className="menu__inner">
            {items.map((menuItem) => {
                const { id, title, price, info, category, image } = menuItem;
                return (
                    <article key={id} className="menu__item">
                        <div className="menu__item-img">
                            <img src={image} alt={title} />
                        </div>
                        <div className="menu__item-info">
                            <div className="menu__item-header">
                                <div className="menu__item-title">{title}</div>
                                <div className="menu__item-price">{price}</div>
                            </div>
                            <div className="menu__item-info">{info}</div>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default Menu;
