import React, {useState} from "react";
import data from './data';
import {FaChevronRight, FaChevronLeft, FaQuoteRight} from 'react-icons/fa'

const App = () => {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);
    return (
        <main>
            <section className="slider">
            <h2 className="title"><span>/</span>Reviews</h2>
            <div className="slider__inner">
                {people.map((person, personIndex) => {
                    const {id, title, image, quote, name} = person;


                    return <article className="slider__item" key={id}>
                        <img src={image} alt={name} className="slider__item-img"/>
                        <div className="slider__item-name">{name}</div>
                        <div className="slider__item-title">{title}</div>
                        <div className="slider__item-quote">{quote}</div>
                        <FaQuoteRight className='slider__item-icon' />
                    </article>
                })}
                <button className="prev">
                    <FaChevronLeft />
                </button>
                <button className="next">
                    <FaChevronRight />
                </button>
            </div>
            </section>
        </main>
    );
};

export default App;
