import React from "react";
import { Outlet } from "react-router-dom";

function ParentComponent() {
    const sharedData = "This data is shared with all nested routes";

    return (
        <div>
            <h1>Parent Component</h1>
            {/* 데이터를 context로 전달 */}
            <Outlet context={{sharedData}}/>
        </div>
    );
}
export default ParentComponent;