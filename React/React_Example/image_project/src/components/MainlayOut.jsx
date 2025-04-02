import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

function MainLayOut() {
    const nationList = useSelector((state) => state.nation.nationList);
    
    return (
        <>
            <h1>아프리카 갤러리</h1>
            {nationList.map((nation) => 
                <Link key={nation.id}  to= {nation.link}>
                    <img src={nation.src} alt={nation.nation}
                        style={{ width: "300px", height: "200px", 
                                objectFit: "cover", margin: "10px"}}></img>
                </Link>
            )}
            <hr />
            <Outlet/>
        </>
    );
}
export default MainLayOut