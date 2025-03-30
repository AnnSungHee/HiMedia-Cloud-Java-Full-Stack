/**
 * props(properties)
 * 구조 분해 할당 방법
 */
export default function Article({title, body}) {
    return (
        <article>
          <h2>{title}</h2>
          <h3>{body}</h3>
        </article>
    );
}