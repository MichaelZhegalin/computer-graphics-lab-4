import {circle} from "./geometry/Сircle";
import {FoolTest} from "./secondaryFunctions/FoolTest";
import {OverlayCheck} from "./secondaryFunctions/OverlayCheck";
import {CreateTangent} from "./functionsForTangents/CreateTangent";

export const LaboratoryTask = (context, circleOne, circleTwo) =>{

    if(FoolTest(circleOne, circleTwo) && OverlayCheck(circleOne, circleTwo)){
        circle(context, Number(circleOne.xCoordinate), Number(circleOne.yCoordinate), Number(circleOne.radius));
        circle(context, Number(circleTwo.xCoordinate), Number(circleTwo.yCoordinate), Number(circleTwo.radius));

        CreateTangent(context, circleOne, circleTwo)
    }

}