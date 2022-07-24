import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useAddUserData, useUserList } from "../hooks/useUserList";
import { Link } from "react-router-dom";

const RQUsers = () => {
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const onSuccess = (data) => {
        console.log("Perform side effect after data fetching", data);
    };

    const onError = (error) => {
        console.log("Perform side effect after encountering error", error);
    };

    // return 값으로 data, isLoading 등,, 들어있음
    // 첫번째 인자로 unique key => 다른 컴포넌트에서도 이 키를 사용해서 호출이 가능함

    const { data, isLoading, isError, isFetching, error, refetch } = useUserList(
        onSuccess,
        onError
    );

    const { mutate: addUser } = useAddUserData();

    const handleAddUser = () => {
        const userName = name;
        const userId = id;
        addUser(userId, userName);
    };

    if (isLoading || isFetching) {
        return <h2>Loading...</h2>;
    }

    if (isError) {
        return <h2>{error.message}</h2>;
    }

    return (
        <>
            <h2>RQ Users</h2>
            <div>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button onClick={handleAddUser}>Add User</button>
            </div>
            <button onClick={refetch}>Fetch Users</button>
            {data?.data.map((user) => {
                return (
                    <div key={user.id}>
                        <Link to={`/rq-user/${user.id}`}>
                            {user.id} {user.name}
                        </Link>
                    </div>
                );
            })}
        </>
    );
};

export default RQUsers;
