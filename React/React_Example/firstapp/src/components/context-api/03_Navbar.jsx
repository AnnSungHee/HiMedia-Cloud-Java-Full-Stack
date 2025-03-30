import React, { createContext, useContext, useState } from "react";
import { UserContext } from "./01_UserContext";

function Navbar() {
    // UserConstext에서 user 정보 가져오기
    const { user } = useContext(UserContext);

    return (
        <nav>
            <h2>Welcome, {user.name}!</h2>
        </nav>
    )
}
export default Navbar;