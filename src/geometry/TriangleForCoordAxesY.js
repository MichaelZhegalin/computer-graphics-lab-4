
export const triangleForCoordAxesY = (context, startingPointX, startingPointY) => {
    context.beginPath();
    context.moveTo(startingPointY + 10,startingPointX);
    context.lineTo(startingPointY - 10,startingPointX + 10);
    context.lineTo(startingPointY - 10,startingPointX - 10);
    context.fill();
}