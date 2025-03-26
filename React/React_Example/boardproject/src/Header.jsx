export default function Header(props) {
  return (
    <>
      <h1>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            props.changeMode();
          }}
        >
          글목록
        </a>
      </h1>
      <hr />
    </>
  );
}
