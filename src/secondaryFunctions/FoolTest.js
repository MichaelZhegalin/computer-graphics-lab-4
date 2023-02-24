import {isNumberCheck} from "./isNumberCheck";

export const FoolTest = (circleOne ,circleTwo) => {

    let rightInput = false

    if(
        isNumberCheck(circleOne.xCoordinate) && isNumberCheck(circleOne.yCoordinate) && isNumberCheck(circleOne.radius) &&
        isNumberCheck(circleTwo.xCoordinate) && isNumberCheck(circleTwo.yCoordinate) && isNumberCheck(circleTwo.radius) &&
        Number(circleOne.radius) > 0 &&  Number(circleTwo.radius) > 0
    ){
        rightInput = true;
    }else if(isNumberCheck(circleOne.xCoordinate) && isNumberCheck(circleOne.yCoordinate) && isNumberCheck(circleOne.radius) &&
        isNumberCheck(circleTwo.xCoordinate) && isNumberCheck(circleTwo.yCoordinate) && isNumberCheck(circleTwo.radius) ){
        alert("Вы неправильно ввели радиус одной из окружностей. Радиус должен быть больше нуля!");
    }else{
        alert("Какая-то из характеристик окружности введена не числом!")
    }

    return rightInput
}