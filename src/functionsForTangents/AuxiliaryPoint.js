import {QuadraticEquation} from "../secondaryFunctions/QuadraticEquation";

export const AuxiliaryPoint = (xBigCircle, yBigCircle, R, xMiddleCircle, yMiddleCircle, rMiddleCircle) => {

    let k1;
    let k2;
    let k3;
    let A;
    let B;
    let C;
    let x1;
    let x2;
    let y1;
    let y2;

    console.log(xBigCircle, yBigCircle, R, xMiddleCircle, yMiddleCircle, rMiddleCircle)


    if (xBigCircle === xMiddleCircle) {
        k2 = 2 * yBigCircle - 2 * yMiddleCircle;
        k3 = xMiddleCircle ** 2 + yMiddleCircle ** 2 - xBigCircle ** 2 - yBigCircle ** 2 + R ** 2 - rMiddleCircle ** 2;
        A = 1
        B = -2 * xMiddleCircle
        C = xMiddleCircle ** 2 + yMiddleCircle ** 2 - rMiddleCircle ** 2 + k3 ** 2 / k2 ** 2 + (2 * yMiddleCircle * k3) / k2;

        x1 = QuadraticEquation(A, B, C)[0]

        y1 = -k3 / k2

        return [x1, y1]

    }else if (yBigCircle === yMiddleCircle){
        k1 = 2 * xBigCircle - 2 * xMiddleCircle;
        k3 = xMiddleCircle ** 2 + yMiddleCircle ** 2 - xBigCircle ** 2 - yBigCircle ** 2 + R ** 2 - rMiddleCircle ** 2;
        A = 1
        B = -2 * yMiddleCircle
        C = xMiddleCircle ** 2 + yMiddleCircle ** 2 - rMiddleCircle ** 2 + k3 ** 2 / k1 ** 2 + (2 * xMiddleCircle * k3) / k1;

        y1 = QuadraticEquation(A, B, C)[0];
        y2 = QuadraticEquation(A, B, C)[1];

        x1 = -k3 / k1
        x2 = x1

        if(y1 >= y2){
            return [x1, y1]
        }
        else{
            return [x2, y2]
        }
    } else{
        k1 = 2*xBigCircle-2*xMiddleCircle;
        k2 = 2*yBigCircle - 2*yMiddleCircle;
        k3 = xMiddleCircle**2 + yMiddleCircle**2 - xBigCircle**2 - yBigCircle**2 + R**2 - rMiddleCircle**2;

        A = 1 + k1**2/k2**2;
        B = -2*xMiddleCircle+(2*k1*k3)/k2**2 + (2*yMiddleCircle*k1)/k2;
        C = xMiddleCircle**2 + yMiddleCircle**2 - rMiddleCircle**2 + k3**2/k2**2 + (2*yMiddleCircle*k3)/k2;

        x1 = QuadraticEquation(A, B, C)[0]
        x2 = QuadraticEquation(A, B, C)[1]

        y1 = (-k3 - x1 * k1) / k2
        y2 = (-k3 - x2 * k1) / k2

        if(y2 >= y1){
            return [x2, y2]
        }
        else{
            return [x1, y1]
        }
    }
}
