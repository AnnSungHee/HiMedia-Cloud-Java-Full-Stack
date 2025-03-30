import React, { createContext, useState } from "react";

// UserContext를 생성
export const UserContext = createContext();

// UserProvider 컴포넌트를 정의해 Provider로 사용
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: "Alice", age: 25});

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};