import {brokenLine} from "./bezierСurves/BrokenLine";
import {FoolTest} from "./secondaryFunctions/FoolTest";
import {ExceedingCanvasCheck} from "./secondaryFunctions/ExceedingCanvasCheck ";
import {rectangle} from "./geometry/Rectangle";
import {startSutherlandCohenAlg} from "./SutherlandCohenAlg";

export const LaboratoryTask = (context, segmentArr, coordinateArr) =>{

    let yOneWindow = Number(coordinateArr[0].xCoordinate);
    let yTwoWindow = Number(coordinateArr[1].xCoordinate);
    let xOneWindow = Number(coordinateArr[0].yCoordinate);
    let xTwoWindow = Number(coordinateArr[1].yCoordinate);

    if(!FoolTest([coordinateArr[0].xCoordinate, coordinateArr[1].xCoordinate], [coordinateArr[0].yCoordinate, coordinateArr[1].yCoordinate])){
        return
    }

    if(!ExceedingCanvasCheck([coordinateArr[0].xCoordinate, coordinateArr[1].xCoordinate], [coordinateArr[0].yCoordinate, coordinateArr[1].yCoordinate])){
        return
    }

    rectangle(context, [xOneWindow, yOneWindow], [xTwoWindow, yTwoWindow])

    if(segmentArr === null){
        alert("Отрезки не были сгенерированы!")
    }else{
        let newArr = []

        for(let i = 0; i < segmentArr.length; i++){
            newArr[i] = [[segmentArr[i][0][1], segmentArr[i][0][0]], [segmentArr[i][1][1], segmentArr[i][1][0]]]
        }

        brokenLine(context, segmentArr, 'grey')

        let yHeight = findMoreCoordinate(xOneWindow, xTwoWindow)
        let yBottom;
        if(yHeight === xTwoWindow){
            yBottom = xOneWindow
        }else{
            yBottom = xTwoWindow
        }

        let xRight = findMoreCoordinate(yOneWindow, yTwoWindow)
        let xLeft;
        if(xRight === yTwoWindow){
            xLeft = yOneWindow
        }else{
            xLeft = yTwoWindow
        }
        console.log(xLeft, yBottom, xRight, yHeight)
        let resultSutherlandCohenAlg = startSutherlandCohenAlg([[xLeft, yBottom], [xRight, yHeight]], newArr)

        let arrVisibilitySegment = []
        let arrPartiallyVisibilitySegment = []

        for(let i = 0; i < resultSutherlandCohenAlg[2].length; i++){
            arrPartiallyVisibilitySegment[i] = [[resultSutherlandCohenAlg[2][i][0][1], resultSutherlandCohenAlg[2][i][0][0]], [resultSutherlandCohenAlg[2][i][1][1], resultSutherlandCohenAlg[2][i][1][0]]]
        }

        for(let i = 0; i < resultSutherlandCohenAlg[1].length; i++){
            arrVisibilitySegment[i] = [[resultSutherlandCohenAlg[1][i][0][1], resultSutherlandCohenAlg[1][i][0][0]], [resultSutherlandCohenAlg[1][i][1][1], resultSutherlandCohenAlg[1][i][1][0]]]
        }

        brokenLine(context, arrVisibilitySegment, 'blue')
        brokenLine(context, arrPartiallyVisibilitySegment, 'orange')
    }
}

function findMoreCoordinate(coordinateOne, coordinateTwo){
    if((coordinateOne >= 0 && coordinateTwo >= 0) || (coordinateOne < 0 && coordinateTwo < 0)){
        if(coordinateOne >= coordinateTwo){
            return coordinateOne
        }else{
            return coordinateTwo
        }
    }else if(coordinateOne < 0 && coordinateTwo >= 0){
        return coordinateTwo
    }else{
        return coordinateOne
    }
}