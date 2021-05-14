import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import data from "./db";

const App = () => {
    const [pizzas, setPizzas] = useState([]);
    useEffect(() => {
        setPizzas(data.pizzas);
    }, []);

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route exact path="/" render={() => <Home pizzas={pizzas} />} />
                <Route path="/cart" component={Cart} />
            </div>
        </div>
    );
};

export default App;
