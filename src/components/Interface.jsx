import Buttons from "./Buttons";
import DotsList from "./DotsList";

const Interface = ({draw, clear, coordinateArr, segmentGenerationButton, setCoordinateArr}) => {

    return (
        <div className='interface'>
            <DotsList coordinateArr={coordinateArr} setCoordinateArr={setCoordinateArr}/>
            <button className="createDot" onClick={segmentGenerationButton}>Сгенерировать отрезки</button>
            <Buttons draw={draw} clear={clear}/>
        </div>
    );
};

export default Interface;