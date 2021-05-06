import React from "react";
import CoctailList from "../component/CoctailList";
import SearchForm from "../component/SearchForm";

const Home = () => {
    return (
        <main>
            <SearchForm />
            <CoctailList />
        </main>
    );
};

export default Home;
