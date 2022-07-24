import React from "react";
import { useUser } from "../hooks/useUser";
import { useParams } from "react-router-dom";

const RQUser = () => {
    const { userId } = useParams();

    const onSuccess = (data) => {
        console.log("Perform side effect after data fetching", data);
    };

    const onError = (error) => {
        console.log("Perform side effect after encountering error", error);
    };

    // return 값으로 data, isLoading 등,, 들어있음
    // 첫번째 인자로 unique key => 다른 컴포넌트에서도 이 키를 사용해서 호출이 가능함

    const { data, isLoading, isError, isFetching, error, refetch } = useUser(
        onSuccess,
        onError,
        userId
    );

    if (isLoading || isFetching) {
        return <h2>Loading...</h2>;
    }

    if (isError) {
        return <h2>{error.message}</h2>;
    }

    return (
        <>
            <h2>RQ User Detail</h2>
            {data?.data.name}
        </>
    );
};

export default RQUser;
