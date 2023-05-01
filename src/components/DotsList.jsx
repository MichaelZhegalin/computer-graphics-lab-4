import React from 'react';
import PointEntry from "./pointEntry";

const DotsList = ({coordinateArr, setCoordinateArr}) => {
    return (
        <div className="dotsList">
            {coordinateArr.map((el, num) =>
                <PointEntry key={el.id} num={num + 1} coordinate={el} setCoordinateArr={setCoordinateArr}/>
            )}
        </div>
    );
};

export default DotsList;