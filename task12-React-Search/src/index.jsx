import React from "react";
import { render } from "react-dom";
import "./styles/style.scss";
import App from "./App";
import { AppProvider } from "./context";

render(
    <AppProvider>
        <App />
    </AppProvider>,
    document.querySelector("#app")
);
