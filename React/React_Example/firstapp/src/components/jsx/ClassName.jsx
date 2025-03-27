/* 
React에서는 
class 대신에 className
for 대신에 htmlFor
*/
function ClassName() {
    const style = {
        backGroundColor: 'green',
        fontSize: '12px'
    }
    return (
        <>
            <div className="testClass">Hello, SungHee!</div>
            <label htmlFor="inpitId">Label Text</label>
            <input id="inpitId" type="text" />
        </>
    )
}
export default ClassName;