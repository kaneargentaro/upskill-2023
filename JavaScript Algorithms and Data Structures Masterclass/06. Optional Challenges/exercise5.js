/**
    Multiple Pointers - averagePair

    Write a function called averagePair. Given a sorted array of integers and a target average, 
    determine if there is a pair of values in the array where the average of the pair equals the 
    target average. There may be more than one pair that matches the average target.

    Bonus Constraints:

        Time: O(N)

        Space: O(1)

    Sample Input:

        averagePair([1,2,3],2.5) // true
        averagePair([1,3,3,5,6,7,10,12,19],8) // true
        averagePair([-1,0,3,4,5,6], 4.1) // false
        averagePair([],4) // false
*/
const { testPassed, testFailed } = require('./log')

/**
 * Calculate the average of a pair of values to determine whether it's the same as the
 * 'avg' parameter.
 * 
 * Use multiple pointers starting from the start and end.
 * 
 * @param {Number[]} arr 
 * @param {Number} avg 
 */
function averagePair(arr, avg) {

    if (arr.length === 0) return false;

    let left = 0;
    let right = arr.length -1;

    while (left < right) {
        let tempAverage = (arr[left] + arr[right]) / 2;
        if (tempAverage === avg) return true;
        else if (tempAverage < avg) left++
        else right--;
    }

    return false;
}

/** Test cases */
// Test 1 
if (averagePair([1, 2, 3], 2.5) === true) testPassed(1);
else testFailed(1);

// Test 2 
if (averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) === true) testPassed(2);
else testFailed(2);

// Test 3 - Duplicate letters
if (averagePair([-1, 0, 3, 4, 5, 6], 4.1) === false) testPassed(3);
else testFailed(3);

if (averagePair([], 4) === false) testPassed(4);
else testFailed(4);

