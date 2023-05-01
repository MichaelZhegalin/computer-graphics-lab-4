export const ExceedingCanvasCheck = (rectangleX, rectangleY) => {

    for(let i = 0; i < rectangleX.length; i++){
        if(rectangleX[i] > 36 || rectangleX[i] < -36){
            alert(`Вершина ${i} выходит за границы холста по оси Х!`)
            return false
        }
    }

    for(let i = 0; i < rectangleY.length; i++){
        if(rectangleY[i] > 21 || rectangleY[i] < -21){
            alert(`Вершина ${i} выходит за границы холста по оси Y!`)
            return false
        }
    }

    return true

}