import { Link } from "react-router-dom";

export default function BoardList() {
    const postList = [
        {id: 1, title: "첫 번째 게시글"},
        {id: 2, title: "두 번째 게시글"},
        {id: 3, title: "세 번째 게시글"},
    ];

    // const list=[];
    // for(let post of postList) {
    //     list.push(<li key={post.id}><Link to={"/post/" + post.id}>{post.title}</Link></li>);
    // }

    return (
        <>
            <h2>게시글 목록</h2>
            <ul>
                {postList.map((post)=> {
                    <li key={post.id}>
                        <Link to={"/post/" + post.id}>{post.title}</Link>
                    </li>
                })}
            </ul>
        </>
    );
}