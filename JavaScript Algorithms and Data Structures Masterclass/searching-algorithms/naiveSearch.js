const { testPassed, testFailed } = require('../log')

// Loop over the longer string
// Loop over the shorter string
// If the characters don't match, break
// If the characters match, keep going
// If done, increment the counter
// return counter

/**
 * Check if a string contains a substring, and return how many times it occurred
 * 
 * @param {String} str
 * @param {String} substr
 */
function naiveSearch(str, substr) {
    if (str.length === 0) return 0;
    if (substr.length === 0) return 0;

    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < substr.length; j++) {
            if (substr[j] !== str[i+j]) {
                i += j;
                break;
            } 
            if (j === substr.length - 1) {
                i += j;
                counter++;
            }
        }
    }

    return counter;
}

/** Test cases */
// Test 1
if (naiveSearch("wowomgzomg", "omg") === 2) testPassed(1);
else testFailed(1);

// Test 2
if (naiveSearch("wowomgzomgomgomg", "omg") === 4) testPassed(2);
else testFailed(2);

// Test 3
if (naiveSearch("", "omg") === 0) testPassed(3);
else testFailed(3);

// Test 4
if (naiveSearch("abcabc", "") === 0) testPassed(4);
else testFailed(4);