import {circle} from "../geometry/Сircle";

function factorial(num){
    let newNum = 1;
    for(let i = 1; i <= num; i++){
        newNum = newNum * i;
    }
    return newNum;
}

export const bezierCurveEquation = (bezierDotsX, bezierDotsY, context) => {
    let t = 0;
    const bezierDegree = bezierDotsX.length - 1;
    let P = null;
    let PY = null;

    while(t <= 1){
        P = (1 - t)**bezierDegree*bezierDotsX[0] + t**bezierDegree*bezierDotsX[bezierDotsX.length - 1]
        for(let i = 1; i < (bezierDegree); i++){
            P = P + (factorial(bezierDegree)/(factorial(i) * factorial(bezierDegree - i))) * t**i * (1-t)**(bezierDegree - i) * bezierDotsX[i];
        }
        PY = (1 - t)**bezierDegree*bezierDotsY[0] + t**bezierDegree*bezierDotsY[bezierDotsY.length - 1]
        for(let i = 1; i < (bezierDegree); i++){
            PY = PY + (factorial(bezierDegree)/(factorial(i) * factorial(bezierDegree - i))) * t**i * (1-t)**(bezierDegree - i) * bezierDotsY[i];
        }
        t += 0.0005

        circle(context, P, PY, 0.15);
        P = 0;
        PY = 0;
    }

}