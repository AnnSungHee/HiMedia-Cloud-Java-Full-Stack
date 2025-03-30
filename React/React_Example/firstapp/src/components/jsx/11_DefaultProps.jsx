function Article({title, body}) {
  return (
    <article>
      <h2>{title}</h2>
      <h3>{body}</h3>
    </article>
  );
}

Article.defaultProps = {
  title: "환경합니다.",
  body: "REACT"
}

/**
 Function App() {
   <Article title="안녕하세요"></Article>
 } 
 */