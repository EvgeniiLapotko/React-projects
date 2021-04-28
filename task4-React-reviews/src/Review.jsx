import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, text, image } = people[index];
    let count = 0;
    const prewReview = () => {
        setIndex((index) => {
            index--;
            if (index < 0) {
                index = people.length - 1;
                return index;
            }
            return index;
        });
    };

    const nextReview = () => {
        setIndex((index) => {
            index++;
            if (index > people.length - 1) {
                index = 0;
                return index;
            }
            return index;
        });
    };

    const randomReview = () => {
        let random = Math.floor(Math.random() * people.length);
        setIndex(random);
    };
    return (
        <div className="review__item">
            <div className="review__item-img">
                <img src={image} alt={name} />
                <span className="quote">
                    <FaQuoteRight />
                </span>
            </div>
            <div className="review__item-name">{name}</div>
            <div className="review__item-job">{job}</div>
            <div className="review__item-text">{text}</div>
            <div className="btn-container">
                <button className="btn-prew" onClick={prewReview}>
                    <FaChevronLeft />
                </button>
                <button className="btn-next" onClick={nextReview}>
                    <FaChevronRight />
                </button>
                <button className="btn-random" onClick={randomReview}>
                    random review
                </button>
            </div>
        </div>
    );
};

export default Review;
