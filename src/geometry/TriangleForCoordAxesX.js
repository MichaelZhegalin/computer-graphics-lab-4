
export const triangleForCoordAxesX = (context, startingPointX, startingPointY) => {
    context.beginPath();
    context.moveTo(startingPointY + 10,startingPointX);
    context.lineTo(startingPointY,startingPointX + 20);
    context.lineTo(startingPointY -10,startingPointX);
    context.fill();
}