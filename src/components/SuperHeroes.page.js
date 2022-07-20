import React, { useState, useEffect } from "react";
import axios from "axios";

const SuperHeroesPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:4000/superheroes")
            .then((res) => {
                setData(res.data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    console.log(data);
    return (
        <>
            <h2>Super Heroes Page</h2>
            {data.map((hero) => {
                return <div key={hero.id}>{hero.name}</div>;
            })}
        </>
    );
};

export default SuperHeroesPage;
