import React from 'react';

const InputCircle = (props) => {
    return (
        <div className="inputContainer">
            <input type="text" placeholder="Введите координату окружности по X" value={props.circle.xCoordinate} onChange={event => {
                props.setCircle(prev => {
                    return{
                        ...prev,
                        xCoordinate: event.target.value
                    }
                })
            }}/>
            <input type="text" placeholder="Введите координату окружности по Y" value={props.circle.yCoordinate} onChange={event => {
                props.setCircle(prev => {
                    return{
                        ...prev,
                        yCoordinate: event.target.value
                    }
                })
            }}/>
            <input type="text" placeholder="Введите радиус окружности" value={props.circle.radius} onChange={event => {
                props.setCircle(prev => {
                    return{
                        ...prev,
                        radius: event.target.value
                    }
                })
            }}/>
        </div>
    );
};

export default InputCircle;