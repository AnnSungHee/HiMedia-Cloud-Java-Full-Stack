/**
 * - useEffect의 리턴값으로 정리(cleanup) 함수를 반환
 *  - 컴포넌트가 언마운트되거나, useEffect가 다시 실행되기 직전에 실행
 *  - 구독 해제, 타이머 제거, 메모리 누수 방지 등의 역할
 */

import { useEffect } from "react";

function ExampleComponent() {
    useEffect(() => {
        // 이 안에 사이트 이펙트 코드 작성
        console.log('Component rendered or updated');

        return () => {
            // Cleanup 함수:
            console.log('Cleanup');
        };
    }, []) // 의존성 배열 (Dependency array)

    return <div>Example Component</div>;
}
export default ExampleComponent;