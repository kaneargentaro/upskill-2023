/**
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
 * The function should calculate the maximum sum of n consecutive elements in the array.
 */

/**
 *  Naive way
 * O(n^2)
 */
// function maxSubarraySum(arr, n) {

//     // n consecutive elements are bigger then the size of the array
//     if (n > arr.length)
//         return null
    
//     // Could be negative numbers but it doesn't really matter
//     let max = -Infinity;

//     // The loop should stop on the last n consecutive element subset
//     for (let i = 0; i < arr.length - num + 1; i++) {

//         // Loop over n consecutive elements and get the sum
//         let temp = 0;
//         for (let j = 0; j < num; j++) 
//             temp += arr[i + j];

//         // This subset's sum is larger then pre-recorded maximum sum
//         if (temp > max) 
//             max = temp;
//     }

//     return max;
// }

/**
 * 
 * @param {Number[]} arr 
 * @param {Number} n 
 * @returns 
 */
function maxSubarraySum(arr, n) {
    
    let maxSum = 0;
    let tempSum = 0;

    // n consecutive elements are bigger then the size of the array
    if (arr.length < n)
        return null

    // Sum the first n consecutive elements to get a baseline sum
    for (let i = 0; i < n; i++) 
        maxSum += arr[i];
    tempSum = maxSum;

    // Continuously calculate the next sum by 
    // subtracting the first element of the previous sum, 
    // and adding the current element.
    // eg. Sliding window because we're currently moving one space
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

if (maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) !== 10) 
    console.log("test 1 failed");
if (maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) !== 17) 
    console.log("test 2 failed");
if (maxSubarraySum([4, 2, 1, 6], 1) !== 6) 
    console.log("test 3 failed");
if (maxSubarraySum([4, 2, 1, 6, 2], 4) !== 13) 
    console.log("test 4 failed");
if (maxSubarraySum([], 4) !== null) 
    console.log("test 5 failed");
