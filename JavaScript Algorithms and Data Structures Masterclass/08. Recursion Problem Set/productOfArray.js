const { testPassed, testFailed } = require('../log')

/**
 * Write a function called productOfArray which takes in an array 
 * of numbers and returns the product of them all.
 * 
 * @param {Number[]} arr 
 */
function productOfArray(arr) {
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

/** Test cases */
// Test 1
if (productOfArray([1, 2, 3]) === 6) testPassed(1);
else testFailed(1);

// Test 2
if (productOfArray([1, 2, 3, 10]) === 60) testPassed(2);
else testFailed(2);

