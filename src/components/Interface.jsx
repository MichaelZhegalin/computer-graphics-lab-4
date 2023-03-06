import React from 'react';
import Buttons from "./Buttons";

const Interface = ({draw, clear}) => {
    return (
        <div className='interface'>
            <Buttons draw={draw} clear={clear}/>
        </div>
    );
};

export default Interface;