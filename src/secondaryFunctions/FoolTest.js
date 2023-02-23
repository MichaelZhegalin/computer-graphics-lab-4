import {isNumberCheck} from "./isNumberCheck";

export const FoolTest = (circleOne ,circleTwo) => {

    let rightInput = false

    if(
        isNumberCheck(circleOne.xCoordinate) && isNumberCheck(circleOne.yCoordinate) && isNumberCheck(circleOne.radius) &&
        isNumberCheck(circleTwo.xCoordinate) && isNumberCheck(circleTwo.yCoordinate) && isNumberCheck(circleTwo.radius) &&
        Number(circleOne.radius) > 0 &&  Number(circleTwo.radius) > 0
    ){
        rightInput = true;
    }else {
        alert("Ты даун :-)");
    }

    return rightInput
}