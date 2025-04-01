/**
 * 
 */
import { useState, useRef, useEffect } from "react";

function CounterComponent() {
    const [count, setCount] = useState(0);
    // 이전 count 값을 저장하는 useRef
    const perviousCountRef = useRef(0);

    // count가 변경될 때마다 실행
    useEffect(() => {
        console.log(`Current count: ${count}, Previous count:${perviousCountRef.current}`);
        perviousCountRef.current = count;
    },[count]);
    
    return (
        <div>
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
        </div>
    );
}

export default CounterComponent;