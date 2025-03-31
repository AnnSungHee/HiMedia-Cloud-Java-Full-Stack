/**
 * 1. 버튼을 클릭할시 상태변수 변경함수인 setCount가 count를 1 증가시킴
 * 2. 상태변수가 변경될때마다 useEffect가 실행됨
 */

import { useEffect } from "react";

function TimerComponent() {
    useEffect(() => {
        // 1초에 한번씩 console에 출력하는 함수 저장
        const timer = setInterval(() => {
            console.log('Timer tick');
        }, 1000);

        return () => {
            // 타이머 해제 (정리 함수)
            clearInterval(timer);
            console.log('Timer stopped');
        }
    }, []);
    return (
        <div>Timer is running</div>
    )
}

export default TimerComponent;