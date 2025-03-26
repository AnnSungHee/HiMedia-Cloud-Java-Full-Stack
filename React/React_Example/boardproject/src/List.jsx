export default function List({postlist}) {
  // const lists = props.lists;
  let listArr = [];
  for(let i = 0; i < postlist.length; i++) {
    let list = postlist[i];
    listArr.push(
      <>
        <a id = {list.id} href="/" onClick={(e) => {
          e.preventDefault();
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
