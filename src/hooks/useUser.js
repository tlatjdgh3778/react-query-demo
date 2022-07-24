import axios from "axios";
import { useMutation, useQuery } from "react-query";

const fetchData = ({ queryKey }) => {
    const userId = queryKey[1];
    return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
};

export const useUser = (onSuccess, onError, userId) => {
    return useQuery(["user", userId], fetchData);
};
