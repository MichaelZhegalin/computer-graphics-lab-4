import Buttons from "./Buttons";
import PointEntry from "./pointEntry";

const Interface = ({draw, clear, coordinateArr, createNewDot, setCoordinateArr, removeDot}) => {

    return (
        <div className='interface'>
            {coordinateArr.map((el, num) =>
                <PointEntry key={num} num={num} coordinate={el} setCoordinateArr={setCoordinateArr} removeDot={removeDot}/>
            )}
            <button onClick={createNewDot}>Создать новую точку</button>
            <Buttons draw={draw} clear={clear}/>
        </div>
    );
};

export default Interface;