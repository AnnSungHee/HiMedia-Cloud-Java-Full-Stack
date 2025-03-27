function Read(props) {
  return (
    <>
        <form action="">
            <p>
                <input type="text" name="title" value={props.post.title} readOnly />
            </p>
            <p>
                <textarea name="body" value={props.post.body} readOnly></textarea>
            </p>
            <p>
                <input type="text" name="author" value={props.post.author} readOnly/>
            </p>
            <p>
                <input type="button" name="edit" value="수정" onClick={(e)=>{
                    props.changeMode(e.target.name);
                }} readOnly/>
                <input type="button" name="delete" value="삭제" onClick={(e)=>{
                    props.changeMode(e.target.name);
                }} readOnly/>
            </p>
        </form>
    </>
  );
}
export default Read;
