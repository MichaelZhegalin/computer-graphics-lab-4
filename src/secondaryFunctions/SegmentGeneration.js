export const segmentGeneration = (numberSegments) =>{
    let xCoordStart
    let yCoordStart
    let xCoordEnd
    let yCoordEnd
    let segments = []
    for(let i = 0; i < numberSegments; i++){
        xCoordStart = getRandomInt(-20, 20)
        yCoordStart = getRandomInt(-35, 35)
        xCoordEnd = getRandomInt(-20, 20)
        yCoordEnd = getRandomInt(-35, 35)
        if(xCoordStart === xCoordEnd && yCoordStart === yCoordEnd){
            i -= 1
        }else{
            segments.push([[xCoordStart, yCoordStart], [xCoordEnd, yCoordEnd]])
        }
    }

    return segments
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
