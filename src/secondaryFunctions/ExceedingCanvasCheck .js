export const ExceedingCanvasCheck = (circleOne, circleTwo) => {
    let exceedingCanvasCheck = true;

    const rCircleOne = Number(circleOne.radius)
    const rCircleTwo = Number(circleTwo.radius)

    if(Number(circleOne.yCoordinate) - rCircleOne < - 24
        ||
        Number(circleOne.yCoordinate) - rCircleOne > 24
        || Number(circleOne.yCoordinate) + rCircleOne > 24
        || Number(circleOne.yCoordinate) + rCircleOne < -24){
        exceedingCanvasCheck = false;
        alert("Окружность номер один выходит за границы холста по оси y!")
    }
    if(Number(circleTwo.yCoordinate) - rCircleTwo < - 24
        ||
        Number(circleTwo.yCoordinate) - rCircleTwo > 24
        || Number(circleTwo.yCoordinate) + rCircleTwo > 24
        || Number(circleTwo.yCoordinate) + rCircleTwo < -24){
        exceedingCanvasCheck = false;
        alert("Окружность номер два выходит за границы холста по оси y!")
    }
    if(Number(circleOne.xCoordinate) - rCircleOne < - 37
        ||
        Number(circleOne.xCoordinate) - rCircleOne > 37
        || Number(circleOne.xCoordinate) + rCircleOne > 37
        || Number(circleOne.xCoordinate) + rCircleOne < -37){
        exceedingCanvasCheck = false;
        alert("Окружность номер один выходит за границы холста по оси x!")
    }
    if(Number(circleTwo.xCoordinate) - rCircleTwo < - 37
        ||
        Number(circleTwo.xCoordinate) - rCircleTwo > 37
        || Number(circleTwo.xCoordinate) + rCircleTwo > 37
        || Number(circleTwo.xCoordinate) + rCircleTwo < -37){
        exceedingCanvasCheck = false;
        alert("Окружность номер два выходит за границы холста по оси x!")
    }

    return exceedingCanvasCheck

}