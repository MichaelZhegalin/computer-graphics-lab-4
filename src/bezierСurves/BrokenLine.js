import {circle} from "../geometry/Сircle";

export const brokenLine = (context, coordinateArr) => {
    context.beginPath();
    context.strokeStyle = 'blue'
    for(let i = 0; i < (coordinateArr.length - 1); i++){
        context.moveTo(coordinateArr[i].yCoordinate * 10, coordinateArr[i].xCoordinate * 10)
        context.lineTo(coordinateArr[i + 1].yCoordinate * 10, coordinateArr[i + 1].xCoordinate * 10)
    }
    context.stroke();

    for(let i = 0; i < coordinateArr.length; i++){
        circle(context, coordinateArr[i].xCoordinate, coordinateArr[i].yCoordinate, 0.5, 'orange')
    }

}