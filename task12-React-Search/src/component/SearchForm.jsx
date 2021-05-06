import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
    const { setSearchTeam, searchTeam } = useGlobalContext();
    const searchValue = React.useRef("");

    React.useEffect(() => {
        searchValue.current.focus();
    }, []);

    const searchCocktails = () => {
        setSearchTeam(searchValue.current.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <section className="search">
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="name" className="form__title">
                    Search Your Favorite Cocktail
                </label>
                <input
                    type="text"
                    id="name"
                    ref={searchValue}
                    placeholder="search..."
                    onChange={searchCocktails}
                />
            </form>
        </section>
    );
};

export default SearchForm;
