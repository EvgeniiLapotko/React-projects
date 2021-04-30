import React, { useState, useEffect } from "react";
import data from "./data";
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from "react-icons/fa";

const App = () => {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 2000);
        return () => clearInterval(slider);
    }, [index]);
    return (
        <main>
            <section className="slider">
                <h2 className="title">
                    <span>/</span>Reviews
                </h2>
                <div className="slider__inner">
                    {people.map((person, personIndex) => {
                        const { id, title, image, quote, name } = person;
                        let position = "nextSlide";
                        if (personIndex === index) {
                            position = "activeSlide";
                        }
                        if (
                            personIndex === index - 1 ||
                            (index === 0 && personIndex === people.length - 1)
                        ) {
                            position = "lastSlide";
                        }

                        return (
                            <article
                                className={`slider__item ${position}`}
                                key={id}
                            >
                                <img
                                    src={image}
                                    alt={name}
                                    className="slider__item-img"
                                />
                                <div className="slider__item-name">{name}</div>
                                <div className="slider__item-title">
                                    {title}
                                </div>
                                <div className="slider__item-quote">
                                    {quote}
                                </div>
                                <FaQuoteRight className="slider__item-icon" />
                            </article>
                        );
                    })}
                    <button
                        className="prev"
                        onClick={() => setIndex(index - 1)}
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        className="next"
                        onClick={() => setIndex(index + 1)}
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </section>
        </main>
    );
};

export default App;
