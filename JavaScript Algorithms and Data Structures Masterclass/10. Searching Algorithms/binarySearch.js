const { testPassed, testFailed } = require('../log')

/**
 * Write a function called binarySearch which accepts a 
 * sorted array and a value and returns the index at 
 * which the value exists. Otherwise, return -1. 
 * 
 * @param {Array} arr - sorted array
 * @param {Value} val
 */
function binarySearch(arr, val) {

    // Multiple Pointers
    let left = 0;
    let right = arr.length - 1;

    // Keep going until we've tested every element
    while (left <= right) {
        // Get the middle element by getting the difference between left and right
        // dividing by 2, and then adding it to the starting point 
        // (eg. 10-19=9
        //      /2=4.5
        //      +10=14.5
        //      round up = 15
        //      so 15th element)
        let middle = Math.round(left + (right - left) / 2);
        if (val === arr[middle]) return middle;
        else if (val > arr[middle]) left = middle + 1;
        else right = middle - 1;
    }

    return -1;
}

/** Test cases */
// Test 1
if (binarySearch([1, 2, 3, 4, 5], 2) === 1) testPassed(1);
else testFailed(1);

// Test 2
if (binarySearch([1, 2, 3, 4, 5], 3) === 2) testPassed(2);
else testFailed(2);

// Test 3
if (binarySearch([1, 2, 3, 4, 5], 5) === 4) testPassed(3);
else testFailed(3);

// Test 4
if (binarySearch([1, 2, 3, 4, 5], 6) === -1) testPassed(4);
else testFailed(4);

// Test 5
if (binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10) === 2) testPassed(5);
else testFailed(5);

// Test 6
if (binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95) === 16) testPassed(6);
else testFailed(6);

// Test 7
if (binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100) === -1) testPassed(7);
else testFailed(7);
