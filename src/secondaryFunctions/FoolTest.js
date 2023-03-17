import {isNumberCheck} from "./isNumberCheck";

export const FoolTest = (bezierDotsX ,bezierDotsY) => {

    for(let i = 0; i < bezierDotsX.length; i++){
        if(!isNumberCheck(bezierDotsX[i])){
            alert(`Координату Х точки ${i} нужно задать числом!`)
            return false;
        }
    }

    for(let i = 0; i < bezierDotsY.length; i++){
        if(!isNumberCheck(bezierDotsY[i])){
            alert(`Координату Y точки ${i} нужно задать числом!`)
            return false;
        }
    }

    return true
}