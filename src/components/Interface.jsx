import React from 'react';
import InputCharacteristicsCircles from "../userInterface/inputCharacteristicsCircles";
import Buttons from "./Buttons";

const Interface = ({circleOne, setCircleOne, circleTwo, setCircleTwo, draw, clear}) => {
    return (
        <div className='interface'>
            <InputCharacteristicsCircles circleOne={circleOne} setCircleOne={setCircleOne} circleTwo={circleTwo} setCircleTwo={setCircleTwo}/>
            <Buttons draw={draw} clear={clear}/>
        </div>
    );
};

export default Interface;