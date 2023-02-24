export const OverlayCheck = (circleOne, circleTwo) => {

    const x1 = Number(circleOne.xCoordinate)
    const x2 = Number(circleTwo.xCoordinate)

    const y1 = Number(circleOne.yCoordinate)
    const y2 = Number(circleTwo.yCoordinate)

    const r1 = Number(circleOne.radius)
    const r2 = Number(circleTwo.radius)

    if(Math.sqrt(((x1 - x2) ** 2 + (y1 - y2) ** 2)) >= (r1 + r2)){
        return true
    }else{
        alert("Окружности накладываются, измените радиус!")
    }
}