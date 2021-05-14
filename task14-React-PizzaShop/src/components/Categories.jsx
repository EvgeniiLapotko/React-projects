import React, { useState } from "react";

const Categories = ({ category }) => {
    const [active, setActive] = useState(null);

    const getActive = (index) => {
        setActive(index);
    };

    return (
        <div className="categories">
            <ul>
                <li
                    className={active === null ? "active" : ""}
                    onClick={() => getActive(null)}
                >
                    Все
                </li>
                {category &&
                    category.map((item, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => getActive(index)}
                                className={active === index ? "active" : ""}
                            >
                                {item}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default Categories;
