/*
    Sliding Window - findLongestSubstring

    Write a function called findLongestSubstring, which accepts a string and returns the length 
    of the longest substring with all distinct characters.

        findLongestSubstring('') // 0
        findLongestSubstring('rithmschool') // 7
        findLongestSubstring('thisisawesome') // 6
        findLongestSubstring('thecatinthehat') // 7
        findLongestSubstring('bbbbbb') // 1
        findLongestSubstring('longestsubstring') // 8
        findLongestSubstring('thisishowwedoit') // 6

    Time Complexity - O(n)
*/

const { testPassed, testFailed } = require('./log')

/**
 * Write a function called findLongestSubstring, which accepts a string and returns the length 
 * of the longest substring with all distinct characters.
 * 
 * @param {String} str - Assume str will always be a String, and will always be in lowercase.
 */
function findLongestSubstring(str) {

    // String is empty so the result is 0
    if (str.length === 0) return 0

    let start = 0;
    let longestSubstring = 0;
    let lookup = {};
    let tempLength = 0;

    while (start < str.length) {

        let char = str[start];

        // The current character is distinct because it's not in our lookup table
        // Add it to our table and update the starting position and substring length.
        if (!(char in lookup)) {
            lookup[char] = start;
            start++;
            tempLength++;
        }
        
        // Current character is a duplicate because it's already in our lookup table
        // Shrink the window, update the longestSubString, and reset the lookup table
        else { 
            longestSubstring = Math.max(longestSubstring, tempLength);
            start = lookup[char] + 1;
            lookup = {};
            tempLength = 0;
        }
    }

    // Update the longest substring one last time
    longestSubstring = Math.max(longestSubstring, tempLength);

    return longestSubstring;
}


/** Test cases */
// Test 1 
if (findLongestSubstring('') === 0) testPassed(1); 
else testFailed(1);

// Test 2 
if (findLongestSubstring('rithmschool') === 7) testPassed(2);
else testFailed(2);

// Test 3 
if (findLongestSubstring('thisisawesome') === 6) testPassed(3); 
else testFailed(3);

// Test 4 
if (findLongestSubstring('thecatinthehat') === 7) testPassed(4);
else testFailed(4);

// Test 5 
if (findLongestSubstring('bbbbbb') === 1) testPassed(5);
else testFailed(5);

// Test 6
if (findLongestSubstring('longestsubstring') === 8) testPassed(6);
else testFailed(6);

// Test 7
if (findLongestSubstring('thisishowwedoit') === 6) testPassed(7);
else testFailed(7);
