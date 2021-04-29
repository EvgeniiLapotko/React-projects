import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
    const [menuItems, setMenuItem] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === "all") {
            setMenuItem(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItem(newItems);
    };
    return (
        <main>
            <h1 className="title">Our Menu</h1>
            <section className="menu">
                <Categories filterItems={filterItems} categories={categories} />
                <Menu items={menuItems} />
            </section>
        </main>
    );
};

export default App;
