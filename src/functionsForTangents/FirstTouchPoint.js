export const FirstTouchPoint = (circle, xAuxiliaryPoint, yAuxiliaryPoint, smallCircle) => {

    const xSmallCircle = smallCircle.xCoordinate;
    const ySmallCircle = smallCircle.yCoordinate;

    const xCoordinate = Number(circle.xCoordinate);
    const yCoordinate = Number(circle.yCoordinate)
    const radius = Number(circle.radius);

    let m;
    let n;

    if(xCoordinate - xAuxiliaryPoint !== 0){
        m = (yCoordinate - yAuxiliaryPoint) / (xCoordinate - xAuxiliaryPoint);
        n = yCoordinate - m*xCoordinate;
    }
    else{
        m = 0;
        n = 0;
    }


    const A = 1 + m**2;
    const B = -2 * xCoordinate + 2*m*n - 2 * yCoordinate * m;
    const C = xCoordinate**2 + n**2 - 2*yCoordinate * n - radius**2+ yCoordinate**2;

    const D = B**2 - 4*A*C;

    const x1 = (-B + Math.sqrt(D)) / (2 * A)
    const x2 = (-B - Math.sqrt(D)) / (2 * A)

    const y1 = m * x1 + n;
    const y2 = m * x2 + n;

    console.log("m n", m, n)

    if(Math.sqrt((x2 - xSmallCircle)**2 + (y2 - ySmallCircle) ** 2) >= Math.sqrt((x1 - xSmallCircle)**2 + (y1 - ySmallCircle) ** 2)){
        return [x1, y1]
    }
    else{
        return [x2, y2]
    }
}