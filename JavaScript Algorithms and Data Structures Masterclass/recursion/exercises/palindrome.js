const { testPassed, testFailed } = require('../log')

/**
 * Write a recursive function called reverse which 
 * accepts a string and returns a new string in reverse.
 * 
 * @param {String} arr 
 */
function reverse(str) {
    if (str.length === 0) return '';
    return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
}

/**
 * 
 * @param {String} str 
 */
function isPalindrome(str) {

    // Inner recursive helper function
    function reverse(str) {
        if (str.length === 0) return '';
        return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
    }

    let stringReversed = reverse(str);

    if (str === stringReversed) return true
    return false;
}

/** Test cases */
// Test 1
if (isPalindrome('awesome') === false) testPassed(1);
else testFailed(1);

// Test 2
if (isPalindrome('foobar') === false) testPassed(2);
else testFailed(2);

// Test 3
if (isPalindrome('tacocat') === true) testPassed(3);
else testFailed(3);

// Test 4
if (isPalindrome('amanaplanacanalpanama') === true) testPassed(4);
else testFailed(4);

// Test 5
if (isPalindrome('amanaplanacanalpandemonium') === false) testPassed(5);
else testFailed(5);
