const { testPassed, testFailed } = require('../log')

/**
 * Write a recursive function called fib which accepts a number 
 * and returns the nth number in the Fibonacci sequence.
 * Recall that the Fibonacci sequence is the sequence of whole 
 * numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and 
 * where every number thereafter is equal to the sum of the 
 * previous two numbers.
 * 
 * @param {Number} num 
 */
function fib(num) {
    if (num < 0) return 0;
    if (num === 1) return 1;
    return fib(num - 1) + fib(num - 2);
}

/** Test cases */
// Test 1
if (fib(4) === 3) testPassed(1);
else testFailed(1);

// Test 2
if (fib(10) === 55) testPassed(2);
else testFailed(2);

// Test 3
if (fib(28) === 317811) testPassed(2);
else testFailed(2);

// Test 4
if (fib(35) === 9227465) testPassed(2);
else testFailed(2);

