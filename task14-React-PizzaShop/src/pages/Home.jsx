import React from "react";
import { Categories, SortPopup, PizzasBlock } from "../components";

const category = ["мясные", "вегатерианские", "Гриль", "Острые"];
const sort = ["популярности", "цене", "алфавиту"];
const Home = ({ pizzas }) => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories category={category} />
                <SortPopup sortArr={sort} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzas.map((item, index) => {
                    return <PizzasBlock key={item.id} {...item} />;
                })}
            </div>
        </div>
    );
};

export default Home;
