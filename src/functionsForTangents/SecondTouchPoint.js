export const SecondTouchPoint = (xAuxiliaryPoint, yAuxiliaryPoint, circle, xFirstTouchPoint, yFirstTouchPoint) => {
    const xCircle = circle.xCoordinate;
    const yCircle = circle.yCoordinate;
    const xSecondTouchPoint = xCircle - (xAuxiliaryPoint - xFirstTouchPoint)
    const ySecondTouchPoint = yCircle - (yAuxiliaryPoint - yFirstTouchPoint)

    return [xSecondTouchPoint, ySecondTouchPoint]
}