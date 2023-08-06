# Data Structures Cheatsheet

- [Data Structures Cheatsheet](#data-structures-cheatsheet)
  - [Big O Basics](#big-o-basics)
    - [Objects](#objects)
      - [Note](#note)
      - [Big O](#big-o)
      - [Object Methods](#object-methods)
    - [Arrays](#arrays)
      - [Note](#note-1)
      - [Big O](#big-o-1)
      - [Object Methods](#object-methods-1)
    - [Singly Linked Lists](#singly-linked-lists)
      - [Big O](#big-o-2)
  - [Problem Solving Patterns](#problem-solving-patterns)
    - [Frequency Counter](#frequency-counter)
    - [Multiple Pointers](#multiple-pointers)
    - [Sliding Window](#sliding-window)
    - [Divide and Conquer](#divide-and-conquer)
    - [Recursion](#recursion)
      - [Tips](#tips)
  - [Searching Algorithms](#searching-algorithms)
    - [Linear Search on Arrays](#linear-search-on-arrays)
    - [Binary Search on Sorted Arrays](#binary-search-on-sorted-arrays)
    - [Native String Search](#native-string-search)
    - [KMP String Search](#kmp-string-search)
  - [Sorting Algorithms](#sorting-algorithms)
    - [Comparison Sorting Algorithms](#comparison-sorting-algorithms)
      - [Built-in JavaScript Array Sort](#built-in-javascript-array-sort)
      - [Bubble Sort](#bubble-sort)
      - [Selection Sort](#selection-sort)
      - [Insertion Sort](#insertion-sort)
      - [Merge Sort](#merge-sort)
      - [Quick Sort](#quick-sort)
    - [Other Sorting Algorithms](#other-sorting-algorithms)
      - [Radix Sort](#radix-sort)
  - [Data Structures](#data-structures)
    - [Singly Linked Lists](#singly-linked-lists-1)
    - [Doubly Linked Lists](#doubly-linked-lists)

## Big O Basics

### Objects

#### Note

```txt
    Unordered data
```

#### Big O

```txt
    Insertion - O(1) 
    Removal - O(1)
    Searching - O(n)
    Access - O(1)
```

#### Object Methods

```txt
    Object.keys - O(n)
    Object.values - O(n)
    Object.entries - O(n)
    hasOwnProperty - O(1)
```

### Arrays

#### Note

```txt
    Ordered list
    Good for Last In First Out
```

#### Big O

```txt
    Insertion:
        - Add to the end - array.push() is O(1)
        - Add to the beginning - reindexing array is O(n) 
    Removal - 
        - Remove from the end - array.pop is O(1)
        - Remove from the beginning - reindexing array is O(n)
    Searching - O(n)
    Access - O(1)
```

#### Object Methods

```txt
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

### Singly Linked Lists

#### Big O

```txt
    Insertion - O(1) (faster then arrays)
    Removal - O(1) from start or O(n) for end
    Searching - O(n)
    Access - O(n)
```

## Problem Solving Patterns

### Frequency Counter

```txt
    Create an array of occurrences and reference it later instead of using nested for loops
```

### Multiple Pointers

```txt
    Creating pointers or values that correspond to an index or position and move towards the beginning, end
    or middle based on a certain condition.

    Efficient for solving problems with minimal space complexity
```

### Sliding Window

```txt
    This pattern involves creating a window which can either be an array or number from one position to another.

    Depending on a certain condition, the window either increases or closes (and a new window is created).

    Very useful for keeping track of a subset of data in an array/string/etc.
```

### Divide and Conquer

```txt
    This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

    This pattern can tremendously decrease time complexity.
```

### Recursion

```txt
    A function that calls itself.

    Adds to the call stack, each time its executed it adds to the top of the call stack, and then pops from the top when executing. (eg like a stack of paper)

    Recursive functions must pass in different input each time it's executed, and must have a base case. A base case will stop the recursion by not calling the function anymore, allowing it to execute the call stack and break out of the infinite loop.

```

#### Tips

```txt
    Arrays: Use methods like slice, the spread operator, or concat to make copies of arrays so you don't mutate them.
    Strings: are immutable, so use methods like slice, substr, or substring to make copies of the strings.
    Objects: make copies of objects using Object.assign, or the spread operator.
```

## Searching Algorithms

### Linear Search on Arrays

```txt
    The basic Array.Prototype search functions like indexOf, find, etc.

    Go through the list from first to last, and try and find if the value exists in the array. Returns -1 if it's not found.

    Big O = O(n)
```

### Binary Search on Sorted Arrays

```txt
    - Must faster than linear search.
    - Must be sorted.
    - Eliminate half of the remaining entries at a time.

    Big O = O(log n)
```

### Native String Search

```txt
    like basic nested for loops
```

### KMP String Search

```txt
```

## Sorting Algorithms

### Comparison Sorting Algorithms

#### Built-in JavaScript Array Sort

```txt
    Sorts according to String, so Number arrays don't sort as you would expect.

    Accepts a comparator function to tell it how to sort. eg.
    [1, 2, 3, 4, 5, 6].sort(a - b);
    ["abc", "defg"].sort(str1.length - str2.length);
```

#### Bubble Sort

```txt
    A sorting algorithm where the largest values bubble to the top.

    Go through the array and compare i and i+1, and swap if i+1 comes before i.

    On each loop, you don't have to sort the last element in the array because it's already sorted from the previous loop.

    Optimise it by adding a 'no swaps performed, so break out of loop' flag.

    Normal:
        Big O = O(n^2)
    
    Optimised version
        Big O = O(n)
```

#### Selection Sort

```txt
    Selection sort is similar to bubble sort, but instead of placing large values into a sorted position at the end of the array, it places small values into sorted positions at the beginning.

    eg. you go through the whole array to get the smallest value, and swap it with the current position, then move onto the next.

    Big O = O(n^2)
```

#### Insertion Sort

```txt
    Builds up the sort by gradually creating a larger left half which is always sorted

    Big O = O(n^2)
```

#### Merge Sort

```txt
    Merge sort is a combination of splitting up, merging, and sorting.

    Arrays that are of size 0 or 1 are always sorted.

    Decompose an array into smaller arrays of 0 or 1, then build up a newly sorted array.

    Harder to understand, but faster to execute

    Big O = O(n log n)
```

#### Quick Sort

```txt
    Quick sort is similar to merge sort, in the way that it exploits the fact that arrays of 0 or 1 elements are always sorted.

    It works by selecting on element (called the "pivot") and finds the index where the pivot should end up in the sorted array. Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.

    You should pick the median value of the dataset for the pivot point for the best possible runtime.

    Big O = O(n log n)
```

### Other Sorting Algorithms

#### Radix Sort

```txt
    Radix sort is a special sorting algorithm that works on lists of numbers (or any binary data).
    
    It does not make comparison between elements.

    It exploits the fact that information about the size of a number is encoded in the number of digits. More digits means a bigger number.

    We achieve this by sorting elements in an array into separate 'buckets' based on the rightmost value, and keep going until we've sorted all 'positions' of an individual element. This will sort the whole array over time.

    Big O = O(nk)
```

## Data Structures

### Singly Linked Lists

```txt
    A data structure that contains a head, tail, and a length property. 

    Linked lists consists of nodes, and each node has a value and a pointer to another node or null.

    Linked lists:
        - do not have indexes (like arrays)
        - Connected via nodes with a next pointer
        - Random access is not allowed
        - Insertion and deletion are relatively cheap compared to Arrays

    Big O go to big o section
```

### Doubly Linked Lists

```txt
    Similar to singly linked lists, but every node has another pointer to the previous node.

    It takes more memory, but is more flexible. 
```
