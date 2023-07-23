/**
    Sliding Window - minSubArrayLen

    Write a function called minSubArrayLen which accepts two parameters - 
    an array of positive integers and a positive integer.

    This function should return the minimal length of a contiguous 
    subarray of which the sum is greater than or equal to the integer passed 
    to the function. If there isn't one, return 0 instead.

    Examples:

        minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
        minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
        minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
        minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
        minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
        minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
        minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

    Time Complexity - O(n)

    Space Complexity - O(1)
*/
const { testPassed, testFailed } = require('./log')

/**
 * This function should return the minimal length of a contiguous 
 * subarray of which the sum is greater than or equal to the integer passed 
 * to the function. If there isn't one, return 0 instead.
 * 
 * Assuming only positive integers and correct data types.
 * 
 * @param {Number[]} arr 
 * @param {Number} value 
 */
function minSubArrayLen(arr, value) {

    let total = 0;
    let start = 0;
    let end = 0;
    let minLength = Infinity;

    while (start < arr.length) {

        // If the current window doesn't add up to the given sum then move to the window to the right
        if (total < value && end < arr.length) {
            total += arr[end];
            end++;
        // eslint-disable-next-line brace-style
        }
        
        // If the current window adds up to at least the sum given then we can shrink the window
        else if (total >= value) {
            minLength = Math.min(minLength, end - start);
            total -= arr[start];
            start++;
        // eslint-disable-next-line brace-style
        }
        
        // Current total less than required total but we reached the end
        else {
            break;
        }
    }

    return (minLength === Infinity) ? 0 : minLength;
}


/** Test cases */
// Test 1 // 2 -> because [4,3] is the smallest subarray
if (minSubArrayLen([2, 3, 1, 2, 4, 3], 7) === 2) testPassed(1); 
else testFailed(1);

// Test 2 // 2 -> because [5,4] is the smallest subarray
if (minSubArrayLen([2, 1, 6, 5, 4], 9) === 2) testPassed(2);
else testFailed(2);

// Test 3 // 1 -> because [62] is greater than 52
if (minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) === 1) testPassed(3); 
else testFailed(3);

// Test 4 
if (minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) === 3) testPassed(4);
else testFailed(4);

// Test 5 
if (minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) === 5) testPassed(5);
else testFailed(5);

// Test 6
if (minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) === 2) testPassed(6);
else testFailed(6);

// Test 7
if (minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) === 0) testPassed(7);
else testFailed(7);
