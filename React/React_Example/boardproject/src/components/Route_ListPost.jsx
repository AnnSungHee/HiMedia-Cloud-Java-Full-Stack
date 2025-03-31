import { Link, Outlet, useOutletContext } from "react-router-dom";

function ListPost() {
    const {postList, setPostList} = useOutletContext();
    
    return (
        <>
            <ul>
                {postList.map((post)=>(
                    <li key={post.id}>
                        <Link to={String(post.id)}>
                            {post.title}({post.author})
                        </Link>
                    </li>
                ))}
            </ul>
            <hr/>
            <Outlet context={{postList, setPostList}}/>
        </>
    );

}
export default ListPost;