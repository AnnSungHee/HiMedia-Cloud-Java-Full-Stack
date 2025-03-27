/* 
React에서는 camelCase 규칙을 사용함
두번째 단어부터 첫 글자를 대문자
*/
function CamelCase () {
    const style = {
        backGroundColor: 'green',
        fontSize: '12px'
    }
    return (
        <div style={style}>Hello, SungHee!</div>
    )
}

export default CamelCase;