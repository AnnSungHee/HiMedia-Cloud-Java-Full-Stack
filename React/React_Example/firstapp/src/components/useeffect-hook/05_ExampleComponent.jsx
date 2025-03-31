/**
 * useEffect((),[])의 형태의 경우 의존성 배열의 내용이 없어서 한 번만 실행되어야 하지만
 * 현재 사이트 이펙트 처리 함수로 setInterval이 작성되어 있기 때문에 
 * 생명주기와 상관없이 1초마다 반복적으로 동작한다.
 */
import { useEffect } from "react";

function ExampleComponent() {
    useEffect(() => {
        // 마운트 시 한 번만 실행
        console.log('Component mounted');
        
        // 언마운트 시 실행
        return () => {
            console.log('Component will unmount');
        }
    }, []);
    // 빈 배열: 마운트 시 한 번 실행, 언마운트 시 정리 함수 실행
    return (
        <div>Example Component</div>
    )
}

export default ExampleComponent;