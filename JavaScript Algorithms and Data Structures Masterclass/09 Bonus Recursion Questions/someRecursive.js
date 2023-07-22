const { testPassed, testFailed } = require('../log')

const isOdd = val => val % 2 !== 0

/**
 * Write a recursive function called someRecursive which accepts 
 * an array and a callback. The function returns true if a single 
 * value in the array returns true when passed to the callback. 
 * Otherwise it returns false.
 * 
 * @param {Number[]} arr 
 * @param {callback} callback
 */
function someRecursive(arr, callback) {
    if (arr.length === 0) return false;
    if (callback(arr[0])) return true;
    return someRecursive(arr.slice(1), callback);
}

/** Test cases */
// Test 1
if (someRecursive([1, 2, 3, 4], isOdd) === true) testPassed(1);
else testFailed(1);

// Test 2
if (someRecursive([4, 6, 8, 9], isOdd) === true) testPassed(2);
else testFailed(2);

// Test 3
if (someRecursive([4, 6, 8], isOdd) === false) testPassed(3);
else testFailed(3);

// Test 4
if (someRecursive([4, 6, 8], val => val > 10) === false) testPassed(4);
else testFailed(4);
