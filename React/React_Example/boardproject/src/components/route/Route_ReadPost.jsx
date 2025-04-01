import { useNavigate, useOutletContext, useParams } from "react-router-dom";

function ReadPost() {
    const {postList, setPostList} = useOutletContext();
    const {postId} = useParams();

    const navigate = useNavigate();
    const post = postList.find((p) => p.id === Number(postId));
    if (!post) return null;

    const deleteLogic = () => {
        const filterPosts = postList.filter((t) => t.id !== Number(postId));
        setPostList(filterPosts);
        navigate("/list");
    }

    return (
        <>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>{post.author}</p>
            <button onClick={() => {
                navigate("../edit/" + postId)
            }}>수정</button>
            <button onClick={deleteLogic}>삭제</button>
        </>
    );
}
export default ReadPost;