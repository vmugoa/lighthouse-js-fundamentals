
//Iterating Over an Array With for loop//

const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}

//Iterating Over an Array With while loop//

console.log("Kitchen stuff to pack:");
let i = 0;
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;
}

/*The for loop and while look code both produce the same result when console logged.

RESULT:

Kitchen stuff to pack:
bowls
plates
pots
pans
eating utensils
glasses
cups
cooking utensils


*/
