import Buttons from "./Buttons";
import DotsList from "./DotsList";

const Interface = ({draw, clear, coordinateArr, createNewDot, setCoordinateArr, removeDot}) => {

    return (
        <div className='interface'>
            <DotsList removeDot={removeDot} coordinateArr={coordinateArr} setCoordinateArr={setCoordinateArr}/>
            <button className="createDot" onClick={createNewDot}>Создать новую точку</button>
            <Buttons draw={draw} clear={clear}/>
        </div>
    );
};

export default Interface;