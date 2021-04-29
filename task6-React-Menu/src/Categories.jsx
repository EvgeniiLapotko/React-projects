import React from "react";

const Categories = ({ filterItems, categories }) => {
    return (
        <div className="btn-container">
            {categories.map((item, index) => {
                return (
                    <button
                        key={index}
                        className="button-filter"
                        onClick={() => filterItems(item)}
                    >
                        {item}
                    </button>
                );
            })}
            {/* <button className="filter-btn" onClick={() => filterItems("all")}>
                All
            </button>
            <button
                className="filter-btn"
                onClick={() => filterItems("breackfast")}
            >
                Breackfast
            </button>
            <button className="filter-btn" onClick={() => filterItems("lunch")}>
                Lunch
            </button>
            <button className="filter-btn" onClick={() => filterItems("diner")}>
                Diner
            </button> */}
        </div>
    );
};

export default Categories;
