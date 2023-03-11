import {bezierCurveEquation} from "./bezierСurves/BezierCurveEquation";

export const LaboratoryTask = (context, coordinateArr) =>{

    let bezierDotsX = [];
    let bezierDotsY = [];

    for(let i = 0; i < coordinateArr.length; i++){
        bezierDotsX[i] = Number(coordinateArr[i].xCoordinate)
        bezierDotsY[i] = Number(coordinateArr[i].yCoordinate)
    }

    bezierCurveEquation(bezierDotsX, bezierDotsY, context)

        // [5, 25, 5, 20, 5], [0, 16, 24, 0, 5]

}