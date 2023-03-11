import './style/App.css';
import './style/btn.css';
import Canvas from "./components/Canvas";
import LabHeader from "./components/LabHeader";
import React, {useState} from "react";
import Interface from "./components/Interface";

function App() {

    const [state, setState] = useState(false);
    const [clearState, setClearState] = useState(false);

    const [coordinateArr, setCoordinateArr] = useState([{
        xCoordinate: "",
        yCoordinate: "",
        id: Date.now(),
    }])
    function createNewDot(){
        setCoordinateArr(prevState => [...prevState, {
            xCoordinate: "",
            yCoordinate: "",
            id: Date.now(),
        }])
    }
    function removeDot(dot){
        setCoordinateArr(coordinateArr.filter(dots => dots.id !== dot))
    }

    const clear = () =>{
        setClearState(prevState => !prevState);
    }

    const draw = () => {
        setState(prevState => !prevState);
    }

  return (
    <div className="App">
        <LabHeader/>
        <Canvas clearState={clearState} draw={draw} setClearState={setClearState} state={state} coordinateArr={coordinateArr}/>
        <Interface draw={draw} clear={clear} removeDot={removeDot} createNewDot={createNewDot} coordinateArr={coordinateArr} setCoordinateArr={setCoordinateArr}/>
    </div>
  );
}

export default App;
