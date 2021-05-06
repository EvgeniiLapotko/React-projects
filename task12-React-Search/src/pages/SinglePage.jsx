import React from "react";
import Loading from "../component/Loading";
import { Link, useParams } from "react-router-dom";

const SinglePage = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>{id}</h2>
        </div>
    );
};

export default SinglePage;
