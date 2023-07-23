const { testPassed, testFailed } = require('../log')

/**
 * Write a function called power which accepts a base and an exponent. 
 * The function should return the power of the base to the exponent. 
 * This function should mimic the functionality of Math.pow()  - 
 * do not worry about negative bases and exponents.
 * 
 * @param {Number} base 
 * @param {Number} exponent 
 */
function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

/** Test cases */
// Test 1
if (power(2, 0) === 1) testPassed(1);
else testFailed(1);

// Test 2
if (power(2, 2) === 4) testPassed(2);
else testFailed(2);

// Test 3
if (power(2, 4) === 16) testPassed(3);
else testFailed(3);
