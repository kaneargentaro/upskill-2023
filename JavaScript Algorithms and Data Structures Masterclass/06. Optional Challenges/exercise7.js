/**
    Sliding Window - maxSubarraySum

    Given an array of integers and a number, write a function called maxSubarraySum, 
    which finds the maximum sum of a subarray with the length of the number passed to 
    the function.

    Note that a subarray must consist of consecutive elements from the original array. 
    In the first example below, [100, 200, 300] is a subarray of the original array, 
    but [100, 300] is not.

        maxSubarraySum([100,200,300,400], 2) // 700
        maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
        maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
        maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
        maxSubarraySum([2,3], 3) // null

    Constraints:

    Time Complexity - O(N)

    Space Complexity - O(1)
*/
const { testPassed, testFailed } = require('./log')

/**
 * 
 * Ignoring:
 *      - Empty parameters and wrong data types
 * 
 * @param {Number[]} arr 
 * @param {Number} n 
 */
function maxSubarraySum(arr, n) {

    // Number of consecutive elements is larger then the size of the array
    if (n > arr.length) return null;

    let maxSum = 0;
    let tempSum = 0;

    // Get baseline
    for (let i = 0; i < n; i++)
        maxSum += arr[i];
    tempSum = maxSum;

    // Subtract the first element and add the next one to our running list
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum)
    }

    return maxSum;
}

/** Test cases */
// Test 1 
if (maxSubarraySum([100, 200, 300, 400], 2) === 700) testPassed(1);
else testFailed(1);

// Test 2 
if (maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) === 39) testPassed(2);
else testFailed(2);

// Test 3 
if (maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) === 5) testPassed(3);
else testFailed(3);

// Test 4 
if (maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) === 5) testPassed(4);
else testFailed(4);

// Test 5 
if (maxSubarraySum([2, 3], 3) === null) testPassed(5);
else testFailed(5);
