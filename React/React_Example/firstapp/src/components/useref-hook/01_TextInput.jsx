import { useRef } from "react";

function TextInput() {
    const inputEl = useRef(null);
    // 현재 current가 저장하고 있는 DOM 요소에 focus기능을 함
    const focusInput = () => {
        inputEl.current.focus();
    };
    return (
        <div>
            {/* 리액트가 렌더링이 끝난 뒤, 해당 DOM 요소를 inputEl.current에 자동으로 넣어줌 */}
            <input ref={inputEl} type="text"/>
            {/* 버튼이 클릭될경우 focusInput 함수 실행 */}
            <button onClick={focusInput}>Focus the Input</button>
        </div>
    );
}
export default TextInput;