import React, { useState, useEffect } from "react";
import Loading from "../component/Loading";
import { Link, useParams } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SinglePage = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        setLoading(true);
        async function getCocktails() {
            try {
                const resolve = await fetch(`${url}${id}`);
                const data = await resolve.json();
                setCocktail(data);
                if (data.drinks) {
                    const {
                        strDrink: name,
                        strDrinkThumb: image,
                        strAlcoholic: info,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    } = data.drinks[0];
                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    ];
                    const newCocktail = {
                        name,
                        image,
                        info,
                        category,
                        glass,
                        instructions,
                        ingredients,
                    };
                    setCocktail(newCocktail);
                } else {
                    setCocktail(null);
                }
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }

        getCocktails();
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    if (!cocktail) {
        return <h2 className="title">no cocktails</h2>;
    }
    const {
        name,
        image,
        info,
        category,
        glass,
        instructions,
        ingredients,
    } = cocktail;
    return (
        <section className="single">
            <div className="container">
                <Link to="/" className="btn">
                    Back Home
                </Link>
                <h2 className="single_title">{name}</h2>
                <div className="single__inner">
                    <div className="single__item">
                        <img src={image} alt="" />
                    </div>
                    <div className="single__item">
                        <p className="single__item-text">
                            <span className="single__item-span">info :</span>
                            {info}
                        </p>
                        <p className="single__item-text">
                            <span className="single__item-span">
                                category :
                            </span>
                            {category}
                        </p>
                        <p className="single__item-text">
                            <span className="single__item-span">glass :</span>
                            {glass}
                        </p>
                        <p className="single__item-text">
                            <span className="single__item-span">
                                instructions :
                            </span>
                            {instructions}
                        </p>
                        <p className="single__item-text">
                            <span className="single__item-span">
                                ingredients :
                            </span>
                            {ingredients.map((item, index) => {
                                return (
                                    <span
                                        key={index}
                                        className="single__item-ingr"
                                    >
                                        {item ? `${item}, ` : null}
                                    </span>
                                );
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SinglePage;
