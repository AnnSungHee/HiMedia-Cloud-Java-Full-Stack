/* 
React에서는 
class 대신에 className
for 대신에 htmlFor
*/
function Component() {
    const element = <p className="title">Hello, World</p>
    return (
        <>
            {element}
            <div>
                <h1>
                    Hello,World!
                </h1>
            </div>
        </>
    )
}
export default Component;