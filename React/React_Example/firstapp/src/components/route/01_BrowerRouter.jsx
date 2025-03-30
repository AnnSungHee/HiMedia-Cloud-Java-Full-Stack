/**
 * 애플리케이션을 감싸는 라우터의 기본 컴포넌트
 * HTML5의 히스토리 API를 사용하여 URL을 관리
 */
import { BrowserRouter } from "react-router-dom";

function BrowserRouter() {
    return (
        <BrowserRouter>
            <MainRoutes/>
        </BrowserRouter>
    );
}
export default BrowserRouter;