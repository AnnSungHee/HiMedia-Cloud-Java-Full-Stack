import React, { createContext, useContext, useState } from "react";
import { UserContext } from "./01_UserContext";

function UserInfo() {
    // UserContext에서 user 정보 가져오기
    const { user } = useContext(UserContext);

    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
        </div>
    );
}

export default UserInfo;