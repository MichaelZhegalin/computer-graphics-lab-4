import {bezierCurveEquation} from "./bezierСurves/BezierCurveEquation";
import {brokenLine} from "./bezierСurves/BrokenLine";
import {FoolTest} from "./secondaryFunctions/FoolTest";
import {ExceedingCanvasCheck} from "./secondaryFunctions/ExceedingCanvasCheck ";

export const LaboratoryTask = (context, coordinateArr) =>{

    let bezierDotsX = [];
    let bezierDotsY = [];

    let bezierDotsXForTest = [];
    let bezierDotsYForTest = [];

    for(let i = 0; i < coordinateArr.length; i++){
        bezierDotsXForTest[i] = [coordinateArr[i].xCoordinate];
        bezierDotsYForTest[i] = [coordinateArr[i].yCoordinate];
        bezierDotsX[i] = Number(coordinateArr[i].xCoordinate)
        bezierDotsY[i] = Number(coordinateArr[i].yCoordinate)
    }

    if(!FoolTest(bezierDotsXForTest, bezierDotsYForTest)){
        return
    }

    if(!ExceedingCanvasCheck(bezierDotsX, bezierDotsY)){
        return
    }
    bezierCurveEquation(bezierDotsX, bezierDotsY, context)
    brokenLine(context, coordinateArr)

}