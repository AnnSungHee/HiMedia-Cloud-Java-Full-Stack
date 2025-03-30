import React from "react";
import { UserProvider } from "./01_UserContext";
import Navbar from "./03_Navbar";
import UserProfile from "./04_UserProfile";

function App() {
    return (
        <UserProvider>
            <Navbar/>
            <UserProfile/>
        </UserProvider>
    );
}

export default App;