import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

import "./styles/style.scss";

import App from "./App";

render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.querySelector("#app")
);
