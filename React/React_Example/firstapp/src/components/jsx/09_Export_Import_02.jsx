function GetName() {
    return <h1>오지환입니다.</h1>;
}

function GetAge() {
    return <h2>33살입니다.</h2>;
}

export {GetName, GetAge};

/**
 * import {GetName, GetAge} from "./ConpFunc";
 * 
 * export default function App() {
 *  return (
 *    <>
 *      <GetName/>
 *      <GetAge/>
 *    </>
 *  );
 * }
 */