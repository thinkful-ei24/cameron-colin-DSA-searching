function eggDrop(floors, currentFloor, previousFloor, rando) {
  const startingFloor = Math.ceil((-1 + Math.sqrt(1+(8 * floors)))/2);
  rando = rando === undefined ? Math.floor(Math.random()*floors) : rando;
  console.log(rando);
  let decrement = 0;
  currentFloor = currentFloor === undefined ? startingFloor: currentFloor;
  previousFloor = previousFloor === undefined ? 1 : previousFloor;

  if(rando < currentFloor) {
    console.log('current floor is', currentFloor);
    //egg breaks
    currentFloor = previousFloor;
    while(rando > currentFloor) {
      currentFloor++;
    }
    return [currentFloor - 1, rando];

  } else {
    decrement++;
    previousFloor = currentFloor + 1;
    currentFloor = currentFloor + (startingFloor - decrement);
    return eggDrop(floors, currentFloor, previousFloor, rando);
  }
}


console.log(eggDrop(100))
//rando  32
//current  28
//previous  28
