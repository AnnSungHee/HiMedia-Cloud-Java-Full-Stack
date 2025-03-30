/**
 * 프로그래밍 방식으로 페이지 이동을 제어하는 훅.
 * 이벤트 발생시 특정 페이지로 이동할 때 유용.
 * 비동기 적으로 처리되면 현재 컴포넌트의 랜더링이 끝난 다음 경로를 변경
 */
import { useNavigate } from "react-router-dom";

function UseNavigate() {
    const navigate = useNavigate();

    return (
        <button onClick={() => { navigate("/about")}}>
            Go to About
        </button>
    );
}
export default LinkNavLink;