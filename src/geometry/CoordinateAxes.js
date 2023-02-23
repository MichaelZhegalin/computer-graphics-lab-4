import {triangleForCoordAxesY} from "./TriangleForCoordAxesY";
import {triangleForCoordAxesX} from "./TriangleForCoordAxesX";
import {circle} from "./Сircle";

function axes(context) {
    context.beginPath()
    context.moveTo(0, 0)
    context.lineTo(0, 390)
    context.moveTo(0, 0)
    context.lineTo(-0, -390)
    context.moveTo(0, 0)
    context.lineTo(240, 0)
    context.moveTo(0, 0)
    context.lineTo(-240, 0)
    context.stroke()
}

function coordinate(context){
    context.beginPath()
    context.fillStyle = 'black'
    for(let i = 0; i < 380; i += 50){
        if (i !== 0){
            context.moveTo(3, i)
            context.lineTo(-3, i)
            context.font = "15px serif";
            context.fillText(`${i / 10}`, 5, i);
        }
    }

    for(let i = 0; i > -380; i -= 50){
        if (i !== 0){
            context.moveTo(3, i)
            context.lineTo(-3, i)
            context.font = "15px serif";
            context.fillText(`${i / 10}`, 5, i);
        }
    }

    for(let i = 0; i < 230; i += 50){
        if (i !== 0){
            context.moveTo(i, 3)
            context.lineTo(i, -3)
            context.font = "15px serif";
            context.fillText(`${i / 10}`, i - 5, 15);
        }
    }

    for(let i = 0; i > -230; i -= 50){
        if (i !== 0){
            context.moveTo(i, 3)
            context.lineTo(i, -3)
            context.font = "15px serif";
            context.fillText(`${i / 10}`, i - 10, 15);
        }
    }

    context.stroke()
}

export const coordinateAxes = (context) => {
    context.translate(400, 250)
    context.rotate((Math.PI / 180) * -90);
    axes(context)
    triangleForCoordAxesY(context, 0,235);
    triangleForCoordAxesX(context, 375, 0);
    circle(context, 0, 0, 0.5, "black");
    coordinate(context)
};
