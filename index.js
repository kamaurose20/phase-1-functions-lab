function distanceFromHqInBlocks(pickupPoint) {

    const location = 42;
    let y=0
    if (pickupPoint<location){
        y=location-pickupPoint
    }
    else{
        y=pickupPoint-location
    }
    return y;
    
}

function distanceFromHqInFeet(blocks) {
    let y=distanceFromHqInBlocks(blocks)
    let block= 264
    let feet=block*y
    return feet

}
function distanceTravelledInFeet(start,end) {
    let blocksTravelled = Math.abs(end - start);
    let distance= blocksTravelled * 264;
    return distance;

}
function calculatesFarePrice(start, end) {
    const distance = distanceTravelledInFeet(start, end); 
    if (distance <= 400) {
      return 0; 
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; 
    } else if (distance > 2000 && distance < 2500) {
      return 25; 
    } else {
      return "cannot travel that far"; 
    }
  }
