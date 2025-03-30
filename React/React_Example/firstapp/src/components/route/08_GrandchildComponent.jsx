import React from "react";
import { useOutletContext } from "react-router-dom";

function GrandchildComponent() {
    const { sharedData } = useOutletContext();

    return (
        <div>
            <h3>Grandchild Component</h3>
            <p>Data from Patent: {sharedData}</p>
        </div>
    );
}
export default GrandchildComponent;