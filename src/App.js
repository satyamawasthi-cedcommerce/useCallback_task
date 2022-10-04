import { memo, useCallback, useState } from "react";
import "./App.css";
import Compo1 from "./components/Compo1";
import Compo2 from "./components/Compo2";
import Compo3 from "./components/Compo3";

function App() {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
// applying callback
  const setVal1 = useCallback((value) => {
    setValue1(value);
  },[])
  const setVal2 = useCallback((value) => {
    setValue2(value);
  },[])
  return (
    <div className="App">
      <Compo1 setVal1={setVal1} />
      <Compo2 value1={value1} setVal2={setVal2} />
      <Compo3 value2={value2} />
    </div>
  );
}

export default memo(App);
