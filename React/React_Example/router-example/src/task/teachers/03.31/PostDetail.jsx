import { useNavigate, useParams } from "react-router-dom";

export default function PostDetail() {
    const {postId} = useParams();
    const navigate = useNavigate();

    const postList = [
        {id: 1, body: "첫번째 게시글 내용입니다."},
        {id: 2, body: "두번째 게시글 내용입니다."},
        {id: 3, body: "세번째 게시글 내용입니다."}
    ];

    const nextpost = (e) => {
        const nextId = Number(postId) + 1;
        if(nextId > postList.length) {
            alert("다음 게시글이 없습니다.")
        } else {
            navigate("/post/" + nextId);
        }
    }

    return (
        <>
            <h2>게시글 상세</h2>
            <p>글 ID : {postId}</p>
            <p>{postList[Number(postId)-1].body}</p>
            <button onClick={nextpost}>다음 게시글</button>
        </>
    );
}