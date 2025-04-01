/**
 * 
 */
import { useState, useEffect } from "react";
function TimerComponent() {
    const [count, setCount] = useState(0);

    // count가 변경될 때마다 useEffect 실행
    useEffect(() => {
        const interval = setInterval(() => {
            console.log(`Count: ${count}`);
        }, 1000);
    
    
        return () => {
            // 기존 타이머를 정리
            clearInterval(interval);
            console.log('Cleanup function executed');
        };
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count+1)}>
                Increase Count
            </button>
        </div>
    )
}

export default TimerComponent;