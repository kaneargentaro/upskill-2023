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

console.log(mergeArrays([1, 50, 100], [5, 30, 170, 500]));
console.log(mergeArrays([], [5, 30, 170, 500]));
console.log(mergeArrays([], []));
console.log(mergeArrays([50], []));
