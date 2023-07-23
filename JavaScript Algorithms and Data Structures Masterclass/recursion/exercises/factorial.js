const { testPassed, testFailed } = require('../log')

/**
 * Write a function factorial which accepts a number and returns the factorial 
 * of that number. A factorial is the product of an integer and all the 
 * integers below it; e.g., factorial four ( 4! ) is equal to 24, 
 * because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.
 * 
 * @param {Number} num 
 */
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/** Test cases */
// Test 1
if (factorial(1) === 1) testPassed(1);
else testFailed(1);

// Test 2
if (factorial(2) === 2) testPassed(2);
else testFailed(2);

// Test 3
if (factorial(4) === 24) testPassed(3);
else testFailed(3);

// Test 4
if (factorial(7) === 5040) testPassed(4);
else testFailed(4);
