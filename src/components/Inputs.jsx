import React from 'react';

const Inputs = (props) => {

    return (
        <div>
            <input onChange={(e) =>{
                props.coordinate.xCoordinate = e.target.value
                props.setCoordinateArr(prev => [...prev])}
            } type="text" value={props.coordinate.xCoordinate}/>
            <input onChange={(e) => {
                props.coordinate.yCoordinate = e.target.value
                props.setCoordinateArr(prev => [...prev])}
            }  type="text" value={props.coordinate.yCoordinate}/>
            <button onClick={() => props.removeDot(props.coordinate.id)}>×</button>
        </div>
    );
};

export default Inputs;