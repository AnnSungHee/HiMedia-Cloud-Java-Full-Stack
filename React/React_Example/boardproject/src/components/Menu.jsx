export default function Menu(props) {
  const lists = props.menuList;
  const newList = [];
  for (let list of lists) {
    newList.push(
      <a
        key = {list.id}
        href="./create"
        onClick={(e) => {
          e.preventDefault();
          props.changeMode(list.mode);
        }}
      >
        {list.title}
      </a>
    );
  }

  return (
    <>
      {newList}
      <hr/>
    </>
  );
}
