import { useNavigate, useOutletContext } from "react-router-dom";

function CreatePost() {
    const {postList, setPostList} = useOutletContext();
    const navigate = useNavigate();

    return (
        <>
        <form onSubmit={(e) => {
          e.preventDefault();
          const newPost = {
            id : postList[postList.length - 1].id + 1,
            author : e.target.author.value,
            title : e.target.title.value,
            body : e.target.body.value,
          }
          console.log("asd");
          setPostList([...postList, newPost]);
          navigate("/list");
        }}>
          <p>
            <input type="text" name="title" placeholder="제목입력" />
          </p>
          <p>
            <textarea name="body" placeholder="내용입력"></textarea>
          </p>
          <p>
            <input type="text" name="author" placeholder="작성자이름" />
          </p>
          <p>
            <input type="submit" value="저장" />
          </p>
        </form>
      </>
    );
}
export default CreatePost;