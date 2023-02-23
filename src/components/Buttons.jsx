import React from 'react';

const Buttons = ({draw, clear}) => {
    return (
        <div className='btnContainer'>
            <button className='normalBtn draw' onClick={draw}>Построить рисунок</button>
            <button className='normalBtn clear' onClick={clear}>Очистить экран</button>
        </div>
    );
};

export default Buttons;