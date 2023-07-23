function mergeArrays(arr1, arr2) {
    let result = [];

    let i = 0;
    let j = 0;

    // Loop through and merge the lower valued element
    while (i < arr1.length || j < arr2.length) {
        if (arr2[j] === undefined || arr2[j] > arr1[i]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    return result;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid, arr.length));
    return mergeArrays(left, right);
}

// console.log(mergeArrays([1, 50, 100], [5, 30, 170, 500]));
// console.log(mergeArrays([], [5, 30, 170, 500]));
// console.log(mergeArrays([], []));
// console.log(mergeArrays([50], []));

console.log(mergeSort([1, 50, 100, 5, 30, 170, 500]));
console.log(mergeSort([]));
console.log(mergeSort([50]));
console.log(mergeSort([50, 1, 79, 3, 1973, 4, 47, 20, 8376, 31, 547]));
