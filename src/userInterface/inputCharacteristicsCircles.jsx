import React from 'react';
import InputCircle from "../components/InputCircle";

const InputCharacteristicsCircles = (props) => {

    return (
        <div>
            <h3 className='circleHeader'>Параметры первой окружности:</h3>
            <InputCircle circle={props.circleOne}  setCircle={props.setCircleOne}/>
            <h3 className='circleHeader'>Параметры второй окружности:</h3>
            <InputCircle circle={props.circleTwo}  setCircle={props.setCircleTwo}/>
        </div>
    );
};

export default InputCharacteristicsCircles;