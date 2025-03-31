import { useParams , useOutletContext, useNavigate } from "react-router-dom";
import { useState } from "react";
function EditPost() {
  const git = useOutletContext();
  console.log(git);
  const {postList, setPostList} = useOutletContext();
  const {postId} = useParams();
  const post = postList.find((p) => p.id === Number(postId));

  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const navigate = useNavigate();

  return (
    <article>
      <h2>Update</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        const editPost = {id: Number(postId), title: title, body: body};
        const newPostList = [...postList];
        for(let i = 0; i < newPostList.length; i++) {
          if(Number(postId) === newPostList[i].id) {
            newPostList[i] = editPost;
          }
        }
        setPostList(newPostList);
        navigate("/list"); 
      }}
      >
        <p>
          <input type="text" name="title" placeholder="title" value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          />
        </p>
        <p>
          <textarea name="body" placeholder="body" value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}>
          </textarea>
        </p>
        <p>
          <input type="submit" value="Update" />
        </p>
      </form>
    </article>
  );
}
export default EditPost;