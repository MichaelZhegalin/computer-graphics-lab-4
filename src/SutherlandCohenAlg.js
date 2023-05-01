const fourBiteCode = (windowCoordinate, arrLineSegments) => {
    const xWindowCoordinate = [windowCoordinate[0][0], windowCoordinate[1][0]];
    const yWindowCoordinate = [windowCoordinate[0][1], windowCoordinate[1][1]];

    let kStart;
    let kEnd;
    let kLineSegments = []

    for(let i = 0; i < arrLineSegments.length; i++){
        kStart = searchT(arrLineSegments[i][0], xWindowCoordinate, yWindowCoordinate)
        kEnd = searchT(arrLineSegments[i][1], xWindowCoordinate, yWindowCoordinate)
        kLineSegments.push([kStart, kEnd])
    }

    return kLineSegments
}

const fourBiteCodeForOneSeg = (windowCoordinate, arrLineSegments) => {
    const xWindowCoordinate = [windowCoordinate[0][0], windowCoordinate[1][0]];
    const yWindowCoordinate = [windowCoordinate[0][1], windowCoordinate[1][1]];

    let kStart;
    let kEnd;

    for(let i = 0; i < arrLineSegments.length; i++){
        kStart = searchT(arrLineSegments[i][0], xWindowCoordinate, yWindowCoordinate)
        kEnd = searchT(arrLineSegments[i][1], xWindowCoordinate, yWindowCoordinate)
    }

    return [kStart, kEnd]
}



function searchT(lineSegment, xWindowCoordinate, yWindowCoordinate){
    let t1 = xWindowCoordinate[0] > lineSegment[0]
    let t2 = xWindowCoordinate[1] < lineSegment[0]
    let t3 = yWindowCoordinate[0] > lineSegment[1]
    let t4 = yWindowCoordinate[1] < lineSegment[1]
    return [t1, t2, t3, t4]
}

function sutherlandCohenAlg(arrCodeLinesSegments, arrLineSegments, windowCoordinate){

    let countCheckedSegments = 0;
    let checkInvisibility = 0;
    let checkVisibility = 0;

    let arrInvisibilitySegment = [];
    let arrVisibilitySegment = [];
    let arrPartiallyVisibilitySegment = [];

    let consideredSegment
    let partiallyVisibilityCheck = false;
    let visibilityCheckCounter = 0;
    let changeEndSegment = 0

    while(countCheckedSegments < arrCodeLinesSegments.length){
        visibilityCheckCounter = 0;
        while(visibilityCheckCounter < 50){
            changeEndSegment = 0
            if(!partiallyVisibilityCheck){
                consideredSegment = arrCodeLinesSegments[countCheckedSegments]
            }else{
                consideredSegment = fourBiteCodeForOneSeg(windowCoordinate, [arrLineSegments[countCheckedSegments]]);
            }

            let consideredSegmentStart = consideredSegment[0];
            let consideredSegmentEnd = consideredSegment[1];

            for(let i = 0; i < 4; i++){
                checkInvisibility = checkInvisibility + consideredSegmentStart[i] * consideredSegmentEnd[i];
            }

            if(checkInvisibility !== 0){
                arrInvisibilitySegment.push(arrLineSegments[countCheckedSegments]);
                checkInvisibility = 0;
                visibilityCheckCounter = 100;
            }
            else{
                for(let i = 0; i < 4; i++){
                    checkVisibility = checkVisibility + consideredSegmentStart[i] + consideredSegmentEnd[i]
                }
                if(checkVisibility === 0){
                    if(!partiallyVisibilityCheck){
                        arrVisibilitySegment.push(arrLineSegments[countCheckedSegments]);
                    }else{
                        arrPartiallyVisibilitySegment.push(arrLineSegments[countCheckedSegments]);
                    }
                    visibilityCheckCounter = 100;
                    partiallyVisibilityCheck = false;
                }else{
                    partiallyVisibilityCheck = true;
                    checkVisibility = 0;
                    let checkVisibilityStart = 0;
                    for(let i = 0; i < 4; i++){
                        checkVisibilityStart = checkVisibilityStart + consideredSegmentStart[i]
                    }
                    if(checkVisibilityStart === 0){
                        consideredSegmentStart = consideredSegmentEnd;
                        consideredSegmentEnd = [false, false, false, false];
                        changeEndSegment = 1;
                    }
                    let x;
                    let y;

                    let tiltAngle = (arrLineSegments[countCheckedSegments][1][1] - arrLineSegments[countCheckedSegments][0][1]) / (arrLineSegments[countCheckedSegments][1][0] - arrLineSegments[countCheckedSegments][0][0])

                    //Если левее
                    if(consideredSegmentStart[0] === true){
                        x = windowCoordinate[0][0];
                        y = (x - arrLineSegments[countCheckedSegments][changeEndSegment][0]) * tiltAngle + arrLineSegments[countCheckedSegments][changeEndSegment][1];
                        arrLineSegments[countCheckedSegments][changeEndSegment][0] = x;
                        arrLineSegments[countCheckedSegments][changeEndSegment][1] = y;
                    }else if(consideredSegmentStart[1] === true){
                        //Если правее
                        x = windowCoordinate[1][0];
                        y = (x - arrLineSegments[countCheckedSegments][changeEndSegment][0]) * tiltAngle + arrLineSegments[countCheckedSegments][changeEndSegment][1];
                        arrLineSegments[countCheckedSegments][changeEndSegment][0] = x;
                        arrLineSegments[countCheckedSegments][changeEndSegment][1] = y;
                    }else if(consideredSegmentStart[2] === true){
                        //Если ниже
                        y = windowCoordinate[0][1];
                        x = (y - arrLineSegments[countCheckedSegments][changeEndSegment][1])/tiltAngle + arrLineSegments[countCheckedSegments][changeEndSegment][0];
                        arrLineSegments[countCheckedSegments][changeEndSegment][0] = x;
                        arrLineSegments[countCheckedSegments][changeEndSegment][1] = y;

                    }else{
                        //Если выше
                        y = windowCoordinate[1][1];
                        x = (y - arrLineSegments[countCheckedSegments][changeEndSegment][1])/tiltAngle + arrLineSegments[countCheckedSegments][changeEndSegment][0];
                        arrLineSegments[countCheckedSegments][changeEndSegment][0] = x;
                        arrLineSegments[countCheckedSegments][changeEndSegment][1] = y;
                    }
                }
            }
            visibilityCheckCounter += 1;
        }

        countCheckedSegments += 1;
    }

    console.log("Список невидимых отрезков", arrInvisibilitySegment)
    console.log("Список видимых отрезков", arrVisibilitySegment)
    console.log("Список частично видимых отрезков", arrPartiallyVisibilitySegment)

    return [arrInvisibilitySegment, arrVisibilitySegment, arrPartiallyVisibilitySegment]
}

export const startSutherlandCohenAlg = (windowCoordinate, arrLineSegments) =>{
    let arrCodeLinesSegments = fourBiteCode(windowCoordinate, arrLineSegments)
    let result = sutherlandCohenAlg(arrCodeLinesSegments, arrLineSegments, windowCoordinate)
    return result
}