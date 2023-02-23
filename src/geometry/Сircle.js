
export const circle = (context, startingPointX, startingPointY, radius, color = 'rgba(245,50,56)') => {
    context.beginPath();
    context.fillStyle = color
    context.arc(startingPointY*10, startingPointX*10, radius*10, 0, 2*Math.PI)
    context.fill();
    context.stroke();
};
