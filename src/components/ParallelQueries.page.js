import React from "react";
import { useQueries, useQuery, useMutation } from "react-query";
import axios from "axios";

const fetchUser = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/users`);
};

const fetchPost = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts`);
};

const fetchUserById = (id) => {
    console.log(id);
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
};

const ParallelQueriesPage = () => {
    const users = [1, 2];

    const results = useQueries({
        queries: users.map((id) => {
            return {
                queryKey: ["fetch-user", id],
                queryFn: () => fetchUserById(id),
            };
        }),
    });
    console.log(results);
    // const users = useQuery(["fetch-user"], fetchUser);
    // const posts = useQuery(["fetch-post"], fetchPost);

    return <div>dynamci useQueries</div>;
};

export default ParallelQueriesPage;
