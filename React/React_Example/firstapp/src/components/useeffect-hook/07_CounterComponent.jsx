/**
 * 
 */
import { useRef, useEffect } from "react";

function AutoFocusInput() {
    const inputRef = useRef(null);

    useEffect(() => {
        // current 속성의 값이 null이 아닌 다른 값이 있는지 확인
        if (inputRef.current) {
            // 현재 속성의 focse를 한다.
            inputRef.current.focus();
        }
    },[]);
    
    // 빈 배열: 마운트 시 한 번 실행, 언마운트 시 정리 함수 실행
    return (
        <div>
            <input ref={inputRef} type="text" placeholder="자동으로 포커스됩니다."/>
        </div>
    );
}

export default AutoFocusInput;