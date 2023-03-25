let distance;
function distanceFromHqInBlocks(distance) {
    let finalBlocks = (distance - 42);
    if (distance <= 42)
    finalBlocks = (42 - distance);
    return finalBlocks

}
console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));


function distanceFromHqInFeet(distance){
        let totalFeet = (distanceFromHqInBlocks(distance) * 264)
        return totalFeet 

}
console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet(start, destination){
    let feetDistance = ((destination - start) * 264);
    if (start <= 34)
    feetDistance = ((start - destination) * 264);
    return feetDistance
}
console.log(distanceTravelledInFeet(43, 48));
console.log(distanceTravelledInFeet(50, 50));
console.log(distanceTravelledInFeet(34, 28));


function calculatesFarePrice(start, destination){
    
    let feet = distanceTravelledInFeet(start,destination)
    if (feet <= 400){
        return 0;
    } else if (feet > 400 && feet <= 2000){
        return 2.56;  
    }else if (feet > 2000 && feet <= 2500){
        return 25;
    }else {
        feet > 2500
        return "cannot travel that far";
    
    }
}
console.log(calculatesFarePrice(43, 44));
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(34, 24));