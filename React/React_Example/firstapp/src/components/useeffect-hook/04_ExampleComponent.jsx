/**
 * useEffect((),[])의 형태의 경우 의존성 배열의 내용이 없어서 한 번만 실행되어야 하지만
 * 현재 사이트 이펙트 처리 함수로 setInterval이 작성되어 있기 때문에 
 * 생명주기와 상관없이 1초마다 반복적으로 동작한다.
 */
import { useEffect } from "react";

function ExampleComponent() {
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

export default ExampleComponent;