import './style/App.css';
import './style/btn.css';
import Canvas from "./components/Canvas";
import LabHeader from "./components/LabHeader";
import React, {useState} from "react";
import Interface from "./components/Interface";
import {segmentGeneration} from "./secondaryFunctions/SegmentGeneration";

function App() {

    const [state, setState] = useState(false);
    const [clearState, setClearState] = useState(false);
    const [segment, setSegment] = useState(null)

    const [coordinateArr, setCoordinateArr] = useState([
        {
            xCoordinate: "",
            yCoordinate: "",
            text: "Введите координаты левой-нижней вершины: ",
            id: Date.now(),
        },
        {
            xCoordinate: "",
            yCoordinate: "",
            text: "Введите координаты правой-верхней вершины: ",
            id: Date.now() - 1,
        }
    ])
    function segmentGenerationButton(){
        setSegment(segmentGeneration(25))
    }

    const clear = () =>{
        coordinateArr[0].xCoordinate = "";
        coordinateArr[0].yCoordinate = "";
        coordinateArr[1].xCoordinate = "";
        coordinateArr[1].yCoordinate = "";
        setCoordinateArr(prevState => prevState)
        setClearState(prevState => !prevState);
    }

    const draw = () => {
        setState(prevState => !prevState);
    }

  return (
    <div className="App">
        <LabHeader/>
        <Canvas clearState={clearState} draw={draw} setClearState={setClearState} state={state} segmentArr={segment} coordinateArr={coordinateArr}/>
        <Interface draw={draw} clear={clear} segmentGenerationButton={segmentGenerationButton} coordinateArr={coordinateArr} setCoordinateArr={setCoordinateArr}/>
    </div>
  );
}

export default App;
