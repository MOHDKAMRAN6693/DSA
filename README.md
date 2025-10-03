# Data Structures and Algorithms (DSA)

This repository contains comprehensive solutions and implementations for various Data Structures and Algorithms problems. Each solution includes multiple approaches, complexity analysis, and extensive test cases.

## 📁 Repository Structure

```
DSA/
├── strings/           # String manipulation algorithms
├── arrays/            # Array processing algorithms  
├── algorithms/        # General algorithmic problems
├── data-structures/   # Stack, Queue, Linked List implementations
├── searching/         # Binary search and search algorithms
├── sorting/           # Various sorting algorithms
├── linked-lists/      # Linked list operations and algorithms
├── index.js           # Centralized access to all solutions
└── README.md          # This file
```

## 🚀 Implemented Solutions

### String Algorithms
- **Reverse String** - Multiple approaches without built-in methods
- **Palindrome Check** - Case-insensitive palindrome detection
- **First Non-Repeating Character** - Find index of first unique character
- **Count Vowels & Consonants** - Character frequency analysis
- **Longest Substring** - Find longest substring without repeating characters
- **Validate Parentheses** - Check balanced brackets with multiple types
- **Group Anagrams** - Group strings by anagram with statistics

### Array Algorithms  
- **Largest & Smallest Numbers** - Find min/max with indices
- **Remove Duplicates** - Multiple deduplication strategies
- **Custom Map/Filter** - Implement Array.prototype methods
- **Merge Sorted Arrays** - Efficient merging with duplicate handling
- **Two Sum** - Find two numbers that add up to target
- **Majority Element** - Find majority element using Boyer-Moore algorithm
- **Rotate Array** - Rotate array by k steps (in-place and extra space)
- **Array Intersection** - Find intersection of two arrays
- **Kth Largest Element** - Find kth largest using multiple approaches

### Data Structures
- **Stack Implementation** - Array-based stack with advanced features
- **Queue Using Stacks** - Implement queue using two stacks
- **Linked List** - Complete linked list with cycle detection and reversal

### Searching Algorithms
- **Binary Search** - Multiple variations (first, last, insertion position)
- **Search Applications** - Range search and closest element finding

### Sorting Algorithms
- **Bubble Sort** - Simple sorting with optimization
- **Quick Sort** - Efficient divide-and-conquer sorting
- **Merge Sort** - Stable sorting with O(n log n) complexity
- **Selection Sort** - Simple in-place sorting
- **Insertion Sort** - Efficient for small datasets
- **Heap Sort** - In-place sorting using heap data structure
- **Counting Sort** - Linear time sorting for small ranges

### General Algorithms
- **Factorial** - Iterative, recursive, and optimized implementations
- **Missing Number** - Find missing number in 1...n sequence

## 🛠️ Usage

### Quick Start
```javascript
const dsa = require('./index');

// String operations
console.log(dsa.strings.reverseString("hello")); // "olleh"
console.log(dsa.strings.isPalindrome("racecar")); // true

// Array operations  
const numbers = [3, 7, 2, 9, 1, 5];
console.log(dsa.arrays.findLargestAndSmallest(numbers));
// { largest: 9, smallest: 1 }

// Algorithm operations
console.log(dsa.algorithms.factorialIterative(5)); // 120
```

### Individual Module Usage
```javascript
// Import specific modules
const { reverseString } = require('./strings/reverse-string');
const { findMissingNumber } = require('./algorithms/missing-number');

console.log(reverseString("world")); // "dlrow"
console.log(findMissingNumber([1, 2, 4, 5])); // 3
```

## 📊 Complexity Analysis

Each solution includes detailed complexity analysis:

| Algorithm | Time Complexity | Space Complexity |
|-----------|----------------|------------------|
| Reverse String | O(n) | O(n) |
| Palindrome Check | O(n) | O(1) |
| Merge Sorted Arrays | O(m+n) | O(m+n) |
| Factorial (Iterative) | O(n) | O(1) |
| Missing Number | O(n) | O(1) |

## 🧪 Testing

All solutions include comprehensive test cases:
- Edge cases (empty arrays, single elements)
- Error handling (invalid inputs)
- Performance benchmarks
- Multiple implementation comparisons

## 🚀 Running the Code

```bash
# Run individual solutions
node strings/reverse-string.js
node arrays/merge-sorted-arrays.js
node algorithms/factorial.js

# Run the main index
node index.js
```

## 📈 Features

- **Multiple Implementations** - Each problem solved with different approaches
- **Comprehensive Testing** - Extensive test cases and edge case handling
- **Performance Analysis** - Time and space complexity for each solution
- **Error Handling** - Robust input validation and error messages
- **Documentation** - Detailed comments and usage examples

## 🔧 Contributing

Feel free to contribute by:
- Adding new algorithmic solutions
- Improving existing implementations
- Adding more test cases
- Optimizing performance
- Enhancing documentation

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Future Enhancements

- [ ] Add more data structures (Linked Lists, Trees, Graphs)
- [ ] Implement sorting algorithms
- [ ] Add dynamic programming solutions
- [ ] Create visualization tools
- [ ] Add performance benchmarking suite
