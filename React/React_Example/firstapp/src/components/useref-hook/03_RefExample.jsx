import { useRef } from "react";

function RefExample() {
    // ref값을 0으로 초기화하여 clickCount에 저장
    const myRef = useRef(0);

    // 현재 myRef current속성에다 1을 추가
    const handleClick = () => {
        // 이전 값 출력
        console.log('Before:', myRef.current);
        // 값 즉시 변경
        myRef.current += 1;
        // 변경된 값 출력
        console.log('After:', myRef.current);
    };
    
    return (
        <div>
            {/* 버튼이 클릭될경우 handleClick 함수 실행 */}
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
export default RefExample