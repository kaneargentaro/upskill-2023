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

/** Test cases */
// Test 1
if (reverse('awesome') === 'emosewa') testPassed(1);
else testFailed(1);

// Test 2
if (reverse('rithmschool') === 'loohcsmhtir') testPassed(2);
else testFailed(2);


