function collectOddValues(arr) {
    
    // Collect the result from each recursion
    let result = [];

    // Inner recursive helper function
    function helper(helperInput) {

        // Break case
        if (helperInput.length === 0)
            return;

        // Add odd numbers
        if (helperInput[0] % 2 !== 0) 
            result.push(helperInput[0]);

        // Remove one from the list and go again
        helper(helperInput.slice(1));
    }

    // Call the helper
    helper(arr);

    // Return result
    return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);
