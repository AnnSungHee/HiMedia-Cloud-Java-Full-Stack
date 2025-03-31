import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";

function ChildComponent() {
    // 상위 컴포넌트의 데이터를 받아옴
    const { sharedData } = useOutletContext;

    return (
        <div>
            <h2>Child Component</h2>
            <p>Data from Parend: {sharedData}</p>
            {/* GrandchildComponent를 렌더링할 Outlet */}
            <Outlet context={{sharedData}}/>
        </div>
    );
}
export default ChildComponent;