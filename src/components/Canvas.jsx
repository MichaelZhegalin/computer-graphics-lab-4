import React, {useEffect, useRef} from 'react';
import {LaboratoryTask} from "../LaboratoryTask";
import {coordinateAxes} from "../geometry/CoordinateAxes";
import {ClearCanvas} from "../userInterface/ClearCanvas";

const Canvas = ({state, clearState, setClearState, draw}) => {

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d')
        context.save();
        coordinateAxes(context)

        if(clearState){
            ClearCanvas(context);
            setClearState(prevState => !prevState)
        }

        if(state){
            ClearCanvas(context);
            LaboratoryTask(context);
            draw();
        }
        context.restore();
    }, [state, clearState])

    return (
        <div className='container'>
            <canvas width='800' height='500' ref={canvasRef} className='canvasStyle'></canvas>
        </div>
    );
};

export default Canvas;