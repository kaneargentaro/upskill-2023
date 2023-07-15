# Objects

### Note:
```
    Unordered data
```

### Big O:
```
    Insertion - O(1) 
    Removal - O(1)
    Searching - O(n)
    Access - O(1)
```

### Object Methods:
```
    Object.keys - O(n)
    Object.values - O(n)
    Object.entries - O(n)
    hasOwnProperty - O(1)
```

# Arrays

### Note:
```
    Ordered list
    Good for Last In First Out
```

### Big O:
```
    Insertion:
        - Add to the end - array.push() is O(1)
        - Add to the beginning - reindexing array is O(n) 
    Removal - 
        - Remove from the end - array.pop is O(1)
        - Remove from the beginning - reindexing array is O(n)
    Searching - O(n)
    Access - O(1)
```

### Object Methods:
```
    push - O(1)
    pop - O(1)
    shift - O(n)
    unshift - O(n)
    concat - O(n)
    slice - O(n)
    splice - O(n)
    sort - O(n * log n)
    foreach/map/filter/reduce - O(n)
```

# Frequency Counter
```
    Create an array of occurrences and reference it later instead of using nested for loops
```

# Multiple Pointers
```
    Creating pointers or values that correspond to an index or position and move towards the beginning, end
    or middle based on a certain condition.

    Efficient for solving problems with minimal space complexity
```