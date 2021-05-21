import React from "react";
import { Categories, SortPopup, PizzasBlock } from "../components";
import { useSelector, useDispatch } from "react-redux";

import { setCategory } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
// import data from "../db"; база в src

const categoryPizzas = ["мясные", "вегатерианские", "Гриль", "Острые"];
const sort = [
    { name: "популярности", type: "rating" },
    { name: "цене", type: "price" },
    { name: "алфавиту", type: "name" },
];

const Home = () => {
    const dispatch = useDispatch();
    const item = useSelector(({ pizzas }) => pizzas.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);

    const onSelectCategory = (index) => {
        dispatch(setCategory(index));
    };

    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy)); //для сервера
        //
        // setTimeout(() => {                      для работы без сервера
        //     dispatch(setPizzas(data.pizzas));
        // }, 3000);
    }, [category, sortBy]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    category={categoryPizzas}
                    onClickItem={onSelectCategory}
                />
                <SortPopup sortArr={sort} activeSort={sortBy} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? (
                    item.map((item, index) => {
                        return <PizzasBlock key={item.id} {...item} />;
                    })
                ) : (
                    <div className="wrap-lds">
                        <div className="lds-ripple">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
