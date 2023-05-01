import {circle} from "./Сircle";

export const rectangle = (context, windowStart, windowEnd) => {
    context.beginPath();
    context.strokeStyle = 'black'

    context.moveTo(windowStart[0] * 10, windowStart[1] * 10)
    context.lineTo(windowEnd[0] * 10, windowStart[1] * 10)

    context.moveTo(windowStart[0] * 10, windowStart[1] * 10)
    context.lineTo(windowStart[0] * 10, windowEnd[1] * 10)

    context.moveTo(windowEnd[0] * 10, windowEnd[1] * 10)
    context.lineTo(windowStart[0] * 10, windowEnd[1] * 10)

    context.moveTo(windowEnd[0] * 10, windowEnd[1] * 10)
    context.lineTo(windowEnd[0] * 10, windowStart[1] * 10)

    context.stroke();

    circle(context, windowStart[1], windowStart[0], 0.4)
    circle(context, windowStart[1], windowEnd[0], 0.4)
    circle(context, windowEnd[1], windowStart[0], 0.4)
    circle(context, windowEnd[1], windowEnd[0], 0.4)
}