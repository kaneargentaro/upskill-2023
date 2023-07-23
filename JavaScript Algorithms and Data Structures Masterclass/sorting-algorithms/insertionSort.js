/**
 * 
 * @param {Number[]} arr 
 */

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const currentVal = arr[i];
        let j = i - 1;
     
        while (j >= 0 && arr[j] > currentVal) {
            arr[j + 1] = arr[j];
            j--;
        }
   
        arr[j + 1] = currentVal;
    }
   
    return arr;
}

/**
 * 
 * @param {Number[]} arr 
 * @param {Number} index1 
 * @param {Number} index2 
 */
function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

console.log('insertionSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);:', insertionSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log('insertionSort([10, 15, 50, 1, 70, 2, 99, 842147524, 0]);:', insertionSort([10, 15, 50, 1, 70, 2, 99, 842147524, 0]));
console.log('insertionSort([]);:', insertionSort([]));
