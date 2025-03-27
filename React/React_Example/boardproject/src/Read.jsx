function Read ({post}) {

    return (
        <>
            <h1>작성자 : {post.author}</h1>
            <h1>제목 : {post.title}</h1>
            <h1>내용 : {post.body}</h1>
        </>
    );
}
export default Read;