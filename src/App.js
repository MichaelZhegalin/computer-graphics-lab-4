import './style/App.css';
import './style/btn.css';
import Canvas from "./components/Canvas";
import LabHeader from "./components/LabHeader";
import React, {useState} from "react";
import Interface from "./components/Interface";

function App() {

    const [state, setState] = useState(false);
    const [clearState, setClearState] = useState(false);

    const clear = () =>{
        setClearState(prevState => !prevState);
    }

    const draw = () => {
        setState(prevState => !prevState);
    }

  return (
    <div className="App">
        <LabHeader/>
        <Canvas clearState={clearState} draw={draw} setClearState={setClearState} state={state}/>
        <Interface  draw={draw} clear={clear}/>
    </div>
  );
}

export default App;
