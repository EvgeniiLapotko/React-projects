import React, { useState } from "react";
import Header from "./header";

const App = () => {
    const [login, setLogin] = useState(true);
    return (
        <div className="app">
            <div className="container">
                <Header login={login} />
            </div>
        </div>
    );
};

export default App;
