import React, { createContext, useState } from "react";
import { UserContext } from "./01_UserContext";

export default function UserProfile() {
    // UserContext에서 user와 setUser 가져오기
    const { user, setUser } = useContext(UserContext);

    // 사용자 정보 업데이트
    const updateUser = () => {
        setUser({ name: "Bob", age: 30 });
    }

    return (
        <div>
            <h2>User Profile</h2>
            <UserInfo/>
            <button onClick={updateUser}>Update User Info</button>
        </div>
    );
}