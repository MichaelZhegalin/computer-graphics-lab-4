export const SearchMiddleSegmentAndRadius = (circleOne, circleTwo) => {
    const xCircleOne = Number(circleOne.xCoordinate)
    const xCircleTwo = Number(circleTwo.xCoordinate)

    const yCircleOne = Number(circleOne.yCoordinate)
    const yCircleTwo = Number(circleTwo.yCoordinate)

    const xMiddleSegment = (xCircleOne + xCircleTwo) / 2;
    const yMiddleSegment = (yCircleOne + yCircleTwo) / 2;

    const rMiddleCircle = Math.sqrt(((xMiddleSegment - xCircleTwo) ** 2 + (yMiddleSegment - yCircleTwo) ** 2));

    return [xMiddleSegment, yMiddleSegment, rMiddleCircle]
}