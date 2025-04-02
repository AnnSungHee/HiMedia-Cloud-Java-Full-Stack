import { Route, Routes } from "react-router-dom";
import MainLayOut from "./components/MainlayOut";
import DetatilNationList from "./components/DetatilNationList";

function App() {

  return (
      <>
        <Routes>
          <Route path="/" element={<MainLayOut/>}>
            <Route path=":nation" element={<DetatilNationList/>}></Route>
          </Route>
        </Routes>
      </>
  );
}

export default App;