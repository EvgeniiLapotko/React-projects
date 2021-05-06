import React from "react";
import { useGlobalContext } from "../context";
import Cocktail from "./Cocktail";
import Loading from "./Loading";

const CoctailList = () => {
    const { cocktails, loading } = useGlobalContext();

    if (loading) {
        return <Loading />;
    }
    if (cocktails.length < 1) {
        return (
            <div className="search_error">
                No Cocktails Matched Your Search Criteria
            </div>
        );
    }
    return (
        <section className="section">
            <div className="container">
                <h1 className="cocktails__title">Cocktails</h1>
                <div className="cocktails__inner">
                    {cocktails.map((item) => {
                        return <Cocktail key={item.id} {...item} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default CoctailList;
