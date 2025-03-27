export default function List(props) {
  // const lists = props.lists;
  let listArr = [];
  for(let i = 0; i < props.postlist.length; i++) {
    let list = props.postlist[i];
    listArr.push(
      <>
        <a id = {list.id} href="/" onClick={(e) => {
          e.preventDefault();
          props.onChangeMode();
        }}>
          {list.title}({list.author})
        </a>
        <hr/>
      </>
    )
  }

  return (
    <>
      {listArr}
    </>
  );
}
