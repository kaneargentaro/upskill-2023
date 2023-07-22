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
    - [Built-in JavaScript Array Sort](#built-in-javascript-array-sort)
    - [KMP String Search](#kmp-string-search)
    - [Bubble Sort](#bubble-sort)
    - [Selection Sort](#selection-sort)
    - [Insertion Sort](#insertion-sort)

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

### Built-in JavaScript Array Sort

```txt
    Sorts according to String, so Number arrays don't sort as you would expect.

    Accepts a comparator function to tell it how to sort. eg.
    [1, 2, 3, 4, 5, 6].sort(a - b);
    ["abc", "defg"].sort(str1.length - str2.length);
```

### KMP String Search

```txt
```

### Bubble Sort

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

### Selection Sort

```txt
    Selection sort is similar to bubble sort, but instead of placing large values into a sorted position at the end of the array, it places small values into sorted positions at the beginning.

    eg. you go through the whole array to get the smallest value, and swap it with the current position, then move onto the next.

    Big O = O(n^2)
```

### Insertion Sort

```txt
    Builds up the sort by gradually creating a larger left half which is always sorted

    Big O = O(n^2)
```
