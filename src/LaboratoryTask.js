import {circle} from "./geometry/Сircle";
import {FoolTest} from "./secondaryFunctions/FoolTest";
import {OverlayCheck} from "./secondaryFunctions/OverlayCheck";
import {ExceedingCanvasCheck} from "./secondaryFunctions/ExceedingCanvasCheck ";
import {bezierCurveEquation} from "./bezierСurves/BezierCurveEquation";

export const LaboratoryTask = (context, circleOne, circleTwo) =>{


    bezierCurveEquation([5, 25, 5, 20, 5], [0, 16, 24, 0, 5], context)

    // if(FoolTest(circleOne, circleTwo) && OverlayCheck(circleOne, circleTwo) && ExceedingCanvasCheck(circleOne, circleTwo)){
    //
    // }

}