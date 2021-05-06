import React from "react";
import { render } from "react-dom";
import "./styles/style.scss";
import App from "./App";
import { AppProvaider } from "./context";

render(
    <AppProvaider>
        <App />
    </AppProvaider>,
    document.querySelector("#app")
);
