const { testPassed, testFailed } = require('../log')

/**
 * Write a recursive function called flatten which accepts 
 * an array of arrays and returns a new array with all values flattened.
 * 
 * @param {Number[]} arr 
 */
function flatten(arr) {
    if (arr.length === 0) return [];
    
    let result = [];

    if (Array.isArray(arr[0]))
        result = flatten(arr[0]);
    else
        result.push(arr[0]);

    return result.concat(flatten(arr.slice(1)));
}

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; ++i) 
        if (a[i] !== b[i]) return false;
    
    return true;
}

/** Test cases */
// Test 1
if (arraysEqual(flatten([1, 2, 3, [4, 5] ]), [1, 2, 3, 4, 5]) === true) testPassed(1);
else testFailed(1);

// Test 2
if (arraysEqual(flatten([1, [2, [3, 4], [[5]]]]), [1, 2, 3, 4, 5]) === true) testPassed(2);
else testFailed(2);

// Test 3
if (arraysEqual(flatten([[1], [2], [3]]), [1, 2, 3]) === true)  testPassed(3);
else testFailed(3);

// Test 4
if (arraysEqual(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]), [1, 2, 3]) === true)  testPassed(4);
else testFailed(4);
