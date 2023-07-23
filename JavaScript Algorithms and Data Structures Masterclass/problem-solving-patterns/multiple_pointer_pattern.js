/**
 * Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0.
 * Return an array that includes both values that sum to zero or undefined if a pair does not exist.
 */

/* // loop through, get the first element, and then check if the same element +/- is in the array?
// O(n^2) due to indexOf
function sumZero(numArr) {

    // Loop through and make sure it's counterpart to equal 0 is in the array
    for (let num of numArr) {
        let secondNumber = 0 - num;
        let indexOf = numArr.indexOf(secondNumber);
        if (indexOf !== -1) 
            return [num, numArr[indexOf]];
    }

    return undefined;
} */

function sumZero(numArr) {
    // Multiple Pointers
    let left = 0;
    let right = numArr.length - 1;
    while (left < right) {
        let sum = numArr[left] + numArr[right];
        if (sum === 0) return [numArr[left], numArr[right]]
        if (sum < 0) left++;
        else right--;
    }
    return undefined;
}

// loop through, get the first element, and then check if the same element +/- is in the array?

/** Examples */
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([[1, 2, 3]])); // undefined
