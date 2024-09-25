// Code your solution in this file!
// const hqlocation = 42

// function distanceFromHqInBlocks(block){

//     return block - hqlocation
// }  
// // Test 1: returns a distance in blocks
// console.assert(distanceFromHqInBlocks(50) === +8, 'Test 1 Failed');
// console.assert(distanceFromHqInBlocks(30) === 12, 'Test 2 Failed');

// // Test 3: calculates distances below 42nd street
// console.assert(distanceFromHqInBlocks(30) === 12, 'Test 3 Failed');
// console.assert(distanceFromHqInBlocks(0) === 42, 'Test 4 Failed');

// // Test for edge case
// console.assert(distanceFromHqInBlocks(42) === 0, 'Test 5 Failed');

// console.log('All tests passed!');

// Assuming the headquarters (HQ) is at 42nd street
const hqLocation = 42;

function distanceFromHqInBlocks(block) {
  return Math.abs(block - hqLocation); 
}

console.assert(distanceFromHqInBlocks(50) === 8, ); // Above HQ
console.assert(distanceFromHqInBlocks(30) === 12, ); // Below HQ
console.assert(distanceFromHqInBlocks(0) === 42, );  // Well below HQ
console.assert(distanceFromHqInBlocks(42) === 0, );  // At HQ

console.log('All tests passed!');

const hqdistance = 42; // HQ is at 42nd street
const feetPerBlock = 264; // Assuming 1 block = 264 feet

function distanceFromHqInFeet(block) {
  const distanceInBlocks = Math.abs(block - hqdistance);
  return distanceInBlocks * feetPerBlock; // Convert blocks to feet
}

console.assert(distanceFromHqInFeet(50) === 2112, ); // Above HQ: (50 - 42) * 264
console.assert(distanceFromHqInFeet(30) === 3168, ); // Below HQ: (42 - 30) * 264
console.assert(distanceFromHqInFeet(0) === 11088, );  // Well below HQ: (42 - 0) * 264
console.assert(distanceFromHqInFeet(42) === 0, );    // At HQ: 0 feet

console.log('Excellent');

const feetPBlock = 264; // Assuming 1 block = 264 feet

function distanceTravelledInFeet(startBlock, endBlock) {
  const distanceInBlocks = Math.abs(endBlock - startBlock);
  return distanceInBlocks * feetPBlock; // Convert blocks to feet
}
console.assert(distanceTravelledInFeet(30, 50) === 5280, 'Test 1 Failed'); // 20 blocks up: (50 - 30) * 264
console.assert(distanceTravelledInFeet(50, 30) === 5280, 'Test 2 Failed'); // 20 blocks down: (50 - 30) * 264
console.assert(distanceTravelledInFeet(0, 30) === 7920, 'Test 3 Failed');  // 30 blocks up: (30 - 0) * 264
console.assert(distanceTravelledInFeet(30, 0) === 7920, 'Test 4 Failed');  // 30 blocks down: (30 - 0) * 264
console.assert(distanceTravelledInFeet(42, 42) === 0, 'Test 5 Failed');    // Same block: 0 feet

console.log('Approved');


// calculating Fare Price(start, destination)

const feetPerBlock = 250;  // assuming the feet is 250

function distanceTravelledInFeet(start, end) {
  return Math.abs(end - start) * feetPerBlock; 
}

function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);
  
  // Check for ride over 2500 feet
  if (distanceInFeet > 2500) {
    return 'cannot travel that far';
  } 
  
  // Fare calculation based on distance
  if (distanceInFeet <= 450) {
    return 0; // First 400 feet are free
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02; // 2 cents per foot after 400 feet
  } else {
    return 25; 
  }
} 
// Test cases for the calculatesFarePrice function
console.assert(calculatesFarePrice(34, 32) === 0, 'Test 1 Failed'); 
console.assert(calculatesFarePrice(34, 40) === 1.76, 'Test 2 Failed'); 
console.assert(calculatesFarePrice(34, 44) === 3.52, 'Test 3 Failed'); 
console.assert(calculatesFarePrice(34, 70) === 25, 'Test 4 Failed');  
console.assert(calculatesFarePrice(34, 100) ===  'Test 5 Failed'); 

console.log('successful');




