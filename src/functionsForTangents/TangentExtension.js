export const TangentExtension = (firstTouchPoint, secondTouchPoint) => {
    let extension = [0, 0];

    if(firstTouchPoint[0] < 0 && secondTouchPoint[0] < 0){
        if(Math.abs(firstTouchPoint[0]) > Math.abs(secondTouchPoint[0])){
            extension = [-10, 10]
        }else{
            extension = [10, -10]
        }
    }else if(firstTouchPoint[0] >= 0 && secondTouchPoint[0] < 0){
        extension = [10, -10]
    }else if(firstTouchPoint[0] < 0 && secondTouchPoint[0] > 0){
        extension = [-10, 10]
    }else{
        if(Math.abs(firstTouchPoint[0]) > Math.abs(secondTouchPoint[0])){
            extension = [10, -10]
        }else{
            extension = [-10, 10]
        }
    }

    return extension
}