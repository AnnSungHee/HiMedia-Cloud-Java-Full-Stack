/**
 * 두 태그 모두 페이지 간 이동을 위한 링크
 * <Link> : 기본 링크를 제공하며, 스타일이 없다.
 * <NavLink> : 활성 상태일 때 스타일을 다르게 지정할 수 있다.
 * <a>의 기본 기능인 페이지 리로딩을 하지 않는다.  
 * activeClassNAme : 링크가 현재 활성화 상태일 때, CSS 클래스 "acitve"를 적용한다
 */
import { Link, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function LinkNavLink() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <NavLink to="/about" activeClassName="active">About</NavLink>
        </nav>
    );
}
export default LinkNavLink;