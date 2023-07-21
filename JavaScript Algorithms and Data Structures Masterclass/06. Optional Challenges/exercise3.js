/**
 * Frequency Counter - sameFrequency
 * 
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
 * 
 * Your solution MUST have the following complexities:
 *      Time: O(N)
 * 
 * Sample Input:
 *  sameFrequency(182,281) // true
 *  sameFrequency(34,14) // false
 *  sameFrequency(3589578, 5879385) // true
 *  sameFrequency(22,222) // false
 */

const { testPassed, testFailed } = require('../log')

/**
 * Two positive integers have the same frequency of digits.
 * 
 * Assume that the numbers are:
 *      - Always positive
 *      - Not null
 *      - Number Data Types
 * 
 * @param {Number} num1 
 * @param {Number} num2 
 */
function sameFrequency(num1, num2) {

    // Convert Numbers into Arrays
    let numArray1 = num1.toString().split('');
    let numArray2 = num2.toString().split('');

    // Inputs have to be the same length to have the same frequency
    if (numArray1.length !== numArray2.length) 
        return false;

    // Frequency Counter for Number Array 1
    let frequencyCounter1 = {};
    for (let number of numArray1) 
        frequencyCounter1[number] = (frequencyCounter1[number] || 0) + 1;

    // Check if elements in Number Array 2 is in our frequency counter
    for (let number of numArray2) {
        // This element is missing from our frequency counter
        if (!frequencyCounter1[number])
            return false;
        // Decrement this element in our frequency counter
        frequencyCounter1[number]--;
    }

    // They're the same
    return true;
}

/** Test cases */
// Test 1
if (sameFrequency(182, 281) === true) 
    testPassed(1);
else
    testFailed(1);

// Test 2
if (sameFrequency(34, 14) === false) 
    testPassed(2);
else
    testFailed(2);

// Test 3
if (sameFrequency(3589578, 5879385) === true) 
    testPassed(3);
else
    testFailed(3);

// Test 4
if (sameFrequency(22, 222) === false) 
    testPassed(4);
else
    testFailed(4);
