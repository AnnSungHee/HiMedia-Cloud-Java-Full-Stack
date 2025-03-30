import { useRef } from "react";

function ClickTracker() {
    // ref값을 0으로 초기화하여 clickCount에 저장
    const clickCount = useRef(0);

    // 현재 clickCount의 current속성에다 1을 추가 current 값을 console에 출력
    const handleClick = () => {
        clickCount.current += 1;
        console.log(`Button clicked ${clickCount.current} times`);
    };
    
    return (
        <div>
            {/* 버튼이 클릭될경우 focusInput 함수 실행 */}
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
export default ClickTracker