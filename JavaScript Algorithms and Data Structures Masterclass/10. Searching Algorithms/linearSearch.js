const { testPassed, testFailed } = require('../log')

/**
 * Write a function called linearSearch which accepts an array and 
 * a value, and returns the index at which the value exists. 
 * If the value does not exist in the array, return -1.
 * 
 * Don't use indexOf to implement this function!
 * 
 * @param {Array} arr 
 * @param {Value} val
 */
function linearSearch(arr, val) {

    // Loop through the array
    // Return the index value if the val matches the element
    for (let i = 0; i < arr.length; i++) 
        if (arr[i] === val) return i;

    // Unable to find a matching value
    return -1;
}

/** Test cases */
// Test 1
if (linearSearch([10, 15, 20, 25, 30], 15) === 1) testPassed(1);
else testFailed(1);

// Test 2
if (linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) === 5) testPassed(2);
else testFailed(2);

// Test 3
if (linearSearch([100], 100) === 0) testPassed(3);
else testFailed(3);

// Test 4
if (linearSearch([1, 2, 3, 4, 5], 6) === -1) testPassed(4);
else testFailed(4);

// Test 5
if (linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) === -1) testPassed(5);
else testFailed(5);

// Test 6
if (linearSearch([100], 200) === -1) testPassed(6);
else testFailed(6);
