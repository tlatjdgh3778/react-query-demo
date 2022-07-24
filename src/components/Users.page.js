import React, { useState, useEffect } from "react";
import axios from "axios";

const UsersPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
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

    return (
        <>
            <h2>Users Page</h2>
            {data.map((user) => {
                return <div key={user.id}>{user.name}</div>;
            })}
        </>
    );
};

export default UsersPage;
