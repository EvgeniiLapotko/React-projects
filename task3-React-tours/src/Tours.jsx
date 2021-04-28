import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
    return (
        <section>
            {tours.map((tour, index) => {
                return (
                    <Tour
                        key={tour.id}
                        tour={tours[index]}
                        removeTour={removeTour}
                    />
                );
            })}
        </section>
    );
};

export default Tours;
