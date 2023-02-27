export const CircleTangencyCheck = (circleOne, circleTwo, context, smallerCircle, largerCircle) => {

    let circleTangency = false;

    if(circleOne.yCoordinate === circleTwo.yCoordinate && (Number(circleOne.radius) + Number(circleTwo.radius)) === Math.abs((Math.abs(circleOne.xCoordinate) - Math.abs(circleTwo.xCoordinate)))){
        circleTangency = true;
        context.beginPath()
        context.strokeStyle = 'blue'
        context.lineWidth = 2;

        let x2 = Number(smallerCircle.xCoordinate) - Number(smallerCircle.radius)
        let x1 = Number(smallerCircle.xCoordinate) + Number(smallerCircle.radius)
        let govno = 1;

        if(Math.sqrt((x2 - Number(largerCircle.xCoordinate))**2 + (0 - Number(largerCircle.xCoordinate)) ** 2) >= Math.sqrt((x1 - Number(largerCircle.xCoordinate))**2 + (0 - Number(largerCircle.xCoordinate)) ** 2)){
            console.log("Влево")
            console.log("Координата меньшей окружности:", smallerCircle)
            govno = 1;

        }
        else{
            console.log("Вправо")
            console.log("Координата меньшей окружности:", smallerCircle)
            govno = -1
        }
        context.moveTo((Number(smallerCircle.yCoordinate) + 10) * 10 , (Number(smallerCircle.xCoordinate) + Number(smallerCircle.radius) * govno) * 10)
        context.lineTo((Number(smallerCircle.yCoordinate) - 10) * 10, (Number(smallerCircle.xCoordinate) + Number(smallerCircle.radius) * govno) * 10)
        context.stroke()
    }else if(circleOne.xCoordinate === circleTwo.xCoordinate && (Number(circleOne.radius) + Number(circleTwo.radius)) === Math.abs((Math.abs(circleOne.yCoordinate) - Math.abs(circleTwo.yCoordinate)))){
        circleTangency = true;
        context.beginPath()
        context.strokeStyle = 'blue'
        context.lineWidth = 2;

        let x2 = Number(smallerCircle.yCoordinate) - Number(smallerCircle.radius)
        let x1 = Number(smallerCircle.yCoordinate) + Number(smallerCircle.radius)
        let govno = 1;

        if(Math.sqrt((x2 - Number(largerCircle.yCoordinate))**2 + (0 - Number(largerCircle.xCoordinate)) ** 2) >= Math.sqrt((x1 - Number(largerCircle.yCoordinate))**2 + (0 - Number(largerCircle.xCoordinate)) ** 2)){
            console.log("Вниз")
            console.log("Координата меньшей окружности:", smallerCircle)
            govno = 1;

        }
        else{
            console.log("Вверх")
            console.log("Координата меньшей окружности:", smallerCircle)
            govno = -1
        }

        context.moveTo((Number(smallerCircle.yCoordinate) + Number(smallerCircle.radius) * govno) * 10, (Number(smallerCircle.xCoordinate) + 10) * 10)
        context.lineTo((Number(smallerCircle.yCoordinate) + Number(smallerCircle.radius) * govno) * 10, (Number(smallerCircle.xCoordinate) - 10) * 10)
        context.stroke()
    }

    return circleTangency;
}