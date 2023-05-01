import {isNumberCheck} from "./isNumberCheck";

export const FoolTest = (rectangleX, rectangleY) => {

    for(let i = 0; i < rectangleX.length; i++){
        if(!isNumberCheck(Number(rectangleX[i]))){
            alert(`Координату Х точки ${i + 1} нужно задать числом!`)
            return false;
        }
    }

    for(let i = 0; i < rectangleY.length; i++){
        if(!isNumberCheck(Number(rectangleY[i]))){
            alert(`Координату Y точки ${i + 1} нужно задать числом!`)
            return false;
        }
    }

    return true
}