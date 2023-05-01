export const brokenLine = (context, coordinateArr, color) => {

    context.beginPath();
    context.strokeStyle = color
    for(let i = 0; i < coordinateArr.length; i++){
        context.moveTo(coordinateArr[i][0][0] * 10, coordinateArr[i][0][1] * 10)
        context.lineTo(coordinateArr[i][1][0] * 10, coordinateArr[i][1][1] * 10)
    }
    context.stroke();
}