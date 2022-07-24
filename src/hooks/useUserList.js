import axios from "axios";
import { useMutation, useQuery } from "react-query";

const fetchData = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users");
};

const addUser = (userId, userName) => {
    console.log("adduser");
    return axios.post(`https://jsonplaceholder.typicode.com/users`, {
        id: userId,
        name: userName,
    });
};

export const useUserList = (onSuccess, onError) => {
    return useQuery(["users"], fetchData, {
        onSuccess,
        onError,
        // select: (data) => {
        //     const userNames = data.data.map((user) => user.name);
        //     return userNames;
        // },
    });
};

export const useAddUserData = () => {
    return useMutation(addUser);
};
