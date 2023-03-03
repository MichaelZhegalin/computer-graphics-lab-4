export const DefiningLargerCircle = (circleOne, circleTwo) =>{
    let largerCircle;
    const circleOneRadius = Number(circleOne.radius);
    const circleTwoRadius = Number(circleTwo.radius);

    if(circleOneRadius >= circleTwoRadius){
        largerCircle = circleOne;
    }else{
        largerCircle = circleTwo;
    }

    return largerCircle
}