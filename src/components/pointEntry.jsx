import React from 'react';
import Inputs from "./Inputs";

const PointEntry = (props) => {

    return (
        <div>
            <Inputs num={props.num} coordinate={props.coordinate} setCoordinateArr={props.setCoordinateArr}/>
        </div>
    );
};

export default PointEntry;