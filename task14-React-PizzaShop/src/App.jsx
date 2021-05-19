import React from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import { setPizzas } from "./redux/actions/pizzas";
import data from "./db";

const App = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        setTimeout(() => {
            dispatch(setPizzas(data.pizzas));
        }, 3000);
    }, []);

    return (
        <div className="wrapper">
            <Header />

            <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/cart" component={Cart} />
            </div>
        </div>
    );
};

export default App;
