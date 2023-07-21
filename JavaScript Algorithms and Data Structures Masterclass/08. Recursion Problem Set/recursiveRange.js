const { testPassed, testFailed } = require('../log')

/**
 * Write a function called recursiveRange which accepts a number 
 * and adds up all the numbers from 0 to the number passed to the function 
 * 
 * @param {Number} num 
 */
function recursiveRange(num) {
    if (num === 0) return 0;
    return num + recursiveRange(num - 1);
}

/** Test cases */
// Test 1
if (recursiveRange(6) === 21) testPassed(1);
else testFailed(1);

// Test 2
if (recursiveRange(10) === 55) testPassed(2);
else testFailed(2);

