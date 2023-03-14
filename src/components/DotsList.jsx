import React from 'react';
import PointEntry from "./pointEntry";

const DotsList = ({coordinateArr, setCoordinateArr, removeDot}) => {
    return (
        <div className="dotsList">
            {coordinateArr.length === 0
                ?
                <h2>Нет заданных точек!</h2>
                :
                coordinateArr.map((el, num) =>
                <PointEntry key={el.id} num={num} coordinate={el} setCoordinateArr={setCoordinateArr} removeDot={removeDot}/>
            )}
        </div>
    );
};

export default DotsList;