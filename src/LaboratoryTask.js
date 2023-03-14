import {bezierCurveEquation} from "./bezierСurves/BezierCurveEquation";
import {brokenLine} from "./bezierСurves/BrokenLine";

export const LaboratoryTask = (context, coordinateArr) =>{

    let bezierDotsX = [];
    let bezierDotsY = [];

    for(let i = 0; i < coordinateArr.length; i++){
        bezierDotsX[i] = Number(coordinateArr[i].xCoordinate)
        bezierDotsY[i] = Number(coordinateArr[i].yCoordinate)
    }

    bezierCurveEquation(bezierDotsX, bezierDotsY, context)
    brokenLine(context, coordinateArr)

}