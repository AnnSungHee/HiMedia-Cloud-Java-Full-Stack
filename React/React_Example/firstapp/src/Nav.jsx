function Nav(props) {
  const lis = [];

  for(let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a id={t.id} href={'/read/' + t.id} onClick={(e)=>{
      e.preventDefault();
      let arr = e.target.href.slice("/");
      props.onChangeMode(arr[arr.length -1]);
    }}>{t.title}</a></li>)
  }

  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  );
};

export default Nav;
