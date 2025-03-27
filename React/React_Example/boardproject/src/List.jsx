  // const lists = props.lists;
  let listArr = [];
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
