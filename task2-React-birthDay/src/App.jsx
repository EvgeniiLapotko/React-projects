import React, { useState } from "react";
import data from "./data";
import Users from "./component/Users";
import BtnClear from "./component/BtnClear";
import BtnUpdate from "./component/BtnUpdate";

const App = () => {
    let [dataArray, setData] = useState(data);

    const clearData = () => {
        setData([]);
    };

    const upData = () => {
        setData(data);
    };

    let value = dataArray.length;
    return (
        <div>
            <h1 className="title">{value} birthdays today</h1>
            <Users data={dataArray} />
            <BtnClear clearData={clearData} />
            <BtnUpdate upData={upData} />
        </div>
    );
};

export default App;
