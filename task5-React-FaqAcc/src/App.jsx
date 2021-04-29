import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

const App = () => {
    const [questions, setQuestions] = useState(data);
    return (
        <main>
            <div className="container">
                <h3 className="title">questions and answer about login</h3>
                <div className="info">
                    {questions.map((question) => {
                        return (
                            <SingleQuestion
                                key={question.id}
                                question={question}
                            />
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default App;
