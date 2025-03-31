/**
 * 1. 버튼을 클릭할시 상태변수 변경함수인 setCount가 count를 1 증가시킴
 * 2. 상태변수가 변경될때마다 useEffect가 실행됨
 */

import { useEffect } from "react";

function ExampleComponent() {
    const [count, setCount] = useState(0);
    
    // 의존성 배열안에 count라는 값이 들어가 있어 count가 변경될때마다 실행
    useEffect(() => {
        console.log(`Count value updated to: ${count}`);
    }, [count]);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increase Count
            </button>
        </div>
    )
}

export default ExampleComponent;