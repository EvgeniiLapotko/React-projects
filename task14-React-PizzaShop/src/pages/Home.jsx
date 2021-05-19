import React from "react";
import { Categories, SortPopup, PizzasBlock } from "../components";
import { useSelector, useDispatch } from "react-redux";

import { setCategory } from "../redux/actions/filters";

const category = ["мясные", "вегатерианские", "Гриль", "Острые"];
const sort = [
    { name: "популярности", type: "popular" },
    { name: "цене", type: "price" },
    { name: "алфавиту", type: "alphabet" },
];

const Home = ({ pizzas }) => {
    const dispatch = useDispatch();
    const item = useSelector(({ pizzas }) => pizzas.items);

    const onSelectCategory = (index) => {
        dispatch(setCategory(index));
    };

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    category={category}
                    onClickItem={onSelectCategory}
                />
                <SortPopup sortArr={sort} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {item.length === 0 ? (
                    <div className="wrap-lds">
                        <div className="lds-ripple">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                ) : (
                    item.map((item, index) => {
                        return <PizzasBlock key={item.id} {...item} />;
                    })
                )}
            </div>
        </div>
    );
};

export default Home;
