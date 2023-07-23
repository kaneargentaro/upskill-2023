/**
    Multiple Pointers - isSubsequence

    Write a function called isSubsequence which takes in two strings and checks 
    whether the characters in the first string form a subsequence of the characters
    in the second string. In other words, the function should check whether the 
    characters in the first string appear somewhere in the second string, without 
    their order changing.

    Examples:

        isSubsequence('hello', 'hello world'); // true
        isSubsequence('sing', 'sting'); // true
        isSubsequence('abc', 'abracadabra'); // true
        isSubsequence('abc', 'acb'); // false (order matters)

    Your solution MUST have AT LEAST the following complexities:

    Time Complexity - O(N + M)

    Space Complexity - O(1)
*/
const { testPassed, testFailed } = require('./log')

/**
 * Takes in two strings and checks whether the characters in the first string form 
 * a subsequence of the characters in the second string. In other words, the function 
 * should check whether the characters in the first string appear somewhere in the 
 * second string, without their order changing.
 * 
 * @param {String} str1 
 * @param {String} str2 
 */
function isSubsequence(str1, str2) {

    let i = 0;

    if (!str1) return true;

    for (let j = 0; j < str2.length; j++) {

        // Matching pair, increment to the next char
        if (str1[i] === str2[j]) 
            i++;

        // All char in str1 has a match in str2
        if (i === str1.length) 
            return true;
    }

    return false;
}

/** Test cases */
// Test 1 
if (isSubsequence('hello', 'hello world') === true) testPassed(1);
else testFailed(1);

// Test 2 
if (isSubsequence('sing', 'sting') === true) testPassed(2);
else testFailed(2);

// Test 3 
if (isSubsequence('abc', 'abracadabra') === true) testPassed(3);
else testFailed(3);

// Test 4 - Fail because order matters
if (isSubsequence('abc', 'acb') === false) testPassed(4);
else testFailed(4);
