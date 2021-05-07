import React, { useState, useEffect, useContext, useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [searchTeam, setSearchTeam] = useState("a");
    const [cocktails, setCoctails] = useState([]);

    const fetchDrinks = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${url}${searchTeam}`);
            const data = await response.json();
            const { drinks } = data;
            if (drinks) {
                const newCocktails = drinks.map((item) => {
                    const {
                        idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass,
                    } = item;
                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass,
                    };
                });
                setCoctails(newCocktails);
            } else {
                setCoctails([]);
            }

            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [searchTeam]);

    useEffect(() => {
        fetchDrinks();
    }, [searchTeam, fetchDrinks]);

    return (
        <AppContext.Provider
            value={{
                loading,
                searchTeam,
                cocktails,
                setSearchTeam,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
