import React from 'react';

const Inputs = (props) => {

    let strXPlaceholder = `Введите координату вершины ${props.num} по X`
    let strYPlaceholder = `Введите координату вершины ${props.num} по Y`

    return (
        <div className="inputContainer">
            <h2>{props.coordinate.text}</h2>
            <div className="dotsInput">
                <input placeholder={strXPlaceholder} onChange={(e) =>{
                props.coordinate.xCoordinate = e.target.value
                props.setCoordinateArr(prev => [...prev])}
            } type="text" value={props.coordinate.xCoordinate}/>
                <input placeholder={strYPlaceholder} onChange={(e) => {
                    props.coordinate.yCoordinate = e.target.value
                    props.setCoordinateArr(prev => [...prev])}
                }  type="text" value={props.coordinate.yCoordinate}/>
            </div>
        </div>
    );
};

export default Inputs;