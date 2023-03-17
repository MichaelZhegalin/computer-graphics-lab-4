export const ExceedingCanvasCheck = (bezierDotsX, bezierDotsY) => {

    for(let i = 0; i < bezierDotsX.length; i++){
        if(bezierDotsX[i] > 36 || bezierDotsX[i] < -36){
            alert(`Точка ${i} выходит за границы холста по оси Х!`)
            return false
        }
    }

    for(let i = 0; i < bezierDotsY.length; i++){
        if(bezierDotsY[i] > 21 || bezierDotsY[i] < -21){
            alert(`Точка ${i} выходит за границы холста по оси Y!`)
            return false
        }
    }

    return true

}