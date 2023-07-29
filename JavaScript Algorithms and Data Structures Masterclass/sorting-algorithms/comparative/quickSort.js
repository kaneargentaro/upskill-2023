function quickSort(arr, left = 0, right = arr.length - 1) {
    // Base Case
    if (left < right) {
        
        // Move all elements that are lower then the
        // element[left] to the left side and return the
        // pivot point where the element[left] ended up
        let pivotIndex = pivot(arr, left, right);

        // Quick sort the left side
        quickSort(arr, left, pivotIndex - 1);

        // Quick sort the right side
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

function pivot(arr, startIndex = 0, endIndex = arr.length - 1) {

    // Pivot value, and the current index value of the pivot point
    let pivot = arr[startIndex];
    let pivotIndex = startIndex;

    // Start looping through 1 element after the pivotIndex
    // because there's no point in looping over itself
    for (let i = startIndex + 1; i <= endIndex; i++) {
        if (pivot > arr[i]) {
            // Increment the counter that's keeping track of how many
            // elements are less than the pivot value
            pivotIndex++;

            // Swap the elements around so the lower element is on the left
            swap(arr, i, pivotIndex);
        }
    }

    // Move the pivot value to the pivotIndex so that it's greater
    // than all the values on the left side
    swap(arr, startIndex, pivotIndex);

    return pivotIndex;
}

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
