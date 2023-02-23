import './style/App.css';
import './style/btn.css';
import Canvas from "./components/Canvas";
import LabHeader from "./components/LabHeader";
import React, {useState} from "react";
import Interface from "./components/Interface";

function App() {

    const [state, setState] = useState(false);
    const [clearState, setClearState] = useState(false);

    const [circleOne, setCircleOne] = useState({
        xCoordinate: "",
        yCoordinate: "",
        radius: ""
    });

    const [circleTwo, setCircleTwo] = useState({
        xCoordinate: "",
        yCoordinate: "",
        radius: ""
    });

    const clear = () =>{
        setClearState(prevState => !prevState);
        setCircleOne({
            xCoordinate: "",
            yCoordinate: "",
            radius: ""
        })

        setCircleTwo({
            xCoordinate: "",
            yCoordinate: "",
            radius: ""
        })
    }

    const draw = () => {
        setState(prevState => !prevState);
    }

  return (
    <div className="App">
        <LabHeader/>
        <Canvas circleOne={circleOne} clearState={clearState} draw={draw} circleTwo={circleTwo} setClearState={setClearState} state={state}/>
        <Interface circleOne={circleOne} setCircleOne={setCircleOne} circleTwo={circleTwo} setCircleTwo={setCircleTwo} draw={draw} clear={clear}/>
    </div>
  );
}

export default App;
