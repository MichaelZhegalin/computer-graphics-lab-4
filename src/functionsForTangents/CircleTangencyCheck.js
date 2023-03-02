export const CircleTangencyCheck = (circleOne, circleTwo, context, smallerCircle, largerCircle) => {

    let circleTangency = false;
    let extensionCoeff = 1;
    const circleOneY = Number(circleOne.yCoordinate);
    const circleTwoY = Number(circleTwo.yCoordinate);
    const circleOneX = Number(circleOne.xCoordinate);
    const circleTwoX = Number(circleTwo.xCoordinate);
    const radiusOne = Number(circleOne.radius);
    const radiusTwo = Number(circleTwo.radius);
    const smallerCircleX = Number(smallerCircle.xCoordinate);
    const smallerCircleY = Number(smallerCircle.yCoordinate);
    const smallerCircleRadius = Number(smallerCircle.radius);
    const largerCircleX = Number(largerCircle.xCoordinate);
    const largerCircleY = Number(largerCircle.yCoordinate);

    if(circleOneY === circleTwoY && (radiusOne + radiusTwo) === Math.abs((Math.abs(circleOneX) - Math.abs(circleTwoX)))){
        circleTangency = true;
        context.beginPath()
        context.strokeStyle = 'blue'
        context.lineWidth = 2;

        let x2 = smallerCircleX - smallerCircleRadius
        let x1 = smallerCircleX + smallerCircleRadius
        extensionCoeff = 1;

        if(Math.sqrt((x2 - largerCircleX)**2 + (0 - largerCircleX) ** 2) >= Math.sqrt((x1 - largerCircleX)**2 + (0 - largerCircleX) ** 2)){
            extensionCoeff = 1;
        }
        else{
            extensionCoeff = -1
        }
        context.moveTo((smallerCircleY + 10) * 10 , (smallerCircleX + smallerCircleRadius * extensionCoeff) * 10)
        context.lineTo((smallerCircleY - 10) * 10, (smallerCircleX + smallerCircleRadius * extensionCoeff) * 10)
        context.stroke()
    }else if(circleOneX === circleTwoX && (radiusOne + radiusTwo) === Math.abs((Math.abs(circleOneY) - Math.abs(circleTwoY)))){
        circleTangency = true;
        context.beginPath()
        context.strokeStyle = 'blue'
        context.lineWidth = 2;

        let x2 = Number(smallerCircle.yCoordinate) - Number(smallerCircle.radius)
        let x1 = Number(smallerCircle.yCoordinate) + Number(smallerCircle.radius)
        extensionCoeff = 1;

        if(Math.sqrt((x2 - largerCircleY)**2 + (0 - largerCircleX) ** 2) >= Math.sqrt((x1 - largerCircleY)**2 + (0 - largerCircleX) ** 2)){
            extensionCoeff = 1;

        }
        else{
            extensionCoeff = -1
        }

        context.moveTo((smallerCircleY + smallerCircleRadius * extensionCoeff) * 10, (smallerCircleX + 10) * 10)
        context.lineTo((smallerCircleY + smallerCircleRadius * extensionCoeff) * 10, (smallerCircleX - 10) * 10)
        context.stroke()
    }

    return circleTangency;
}