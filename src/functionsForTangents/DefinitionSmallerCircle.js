export const DefinitionSmallerCircle = (circleOne, circleTwo) =>{
    let smallerCircle;
    const circleOneRadius = Number(circleOne.radius);
    const circleTwoRadius = Number(circleTwo.radius);

    if(circleOneRadius >= circleTwoRadius){
        smallerCircle = circleTwo;
    }else{
        smallerCircle = circleOne;
    }

    console.log("Меньшая окружность", smallerCircle)

    return smallerCircle
}