/**
 * DSA Solutions Index
 * This file provides easy access to all implemented solutions
 */

// String algorithms
const reverseString = require('./strings/reverse-string');
const palindromeCheck = require('./strings/palindrome-check');
const firstNonRepeating = require('./strings/first-non-repeating');
const countVowelsConsonants = require('./strings/count-vowels-consonants');
const longestSubstring = require('./strings/longest-substring');
const validateParentheses = require('./strings/validate-parentheses');
const groupAnagrams = require('./strings/group-anagrams');

// Array algorithms
const largestSmallest = require('./arrays/largest-smallest');
const removeDuplicates = require('./arrays/remove-duplicates');
const customMapFilter = require('./arrays/custom-map-filter');
const mergeSortedArrays = require('./arrays/merge-sorted-arrays');
const twoSum = require('./arrays/two-sum');
const majorityElement = require('./arrays/majority-element');
const rotateArray = require('./arrays/rotate-array');
const arrayIntersection = require('./arrays/array-intersection');
const kthLargest = require('./arrays/kth-largest');

// Data structures
const stack = require('./data-structures/stack');
const queueUsingStacks = require('./data-structures/queue-using-stacks');

// Searching algorithms
const binarySearch = require('./searching/binary-search');

// Sorting algorithms
const sortingAlgorithms = require('./sorting/sorting-algorithms');

// Linked list algorithms
const linkedList = require('./linked-lists/linked-list');

// General algorithms
const factorial = require('./algorithms/factorial');
const missingNumber = require('./algorithms/missing-number');

// Export all solutions
module.exports = {
    // String algorithms
    strings: {
        reverseString: reverseString.reverseString,
        reverseStringTwoPointers: reverseString.reverseStringTwoPointers,
        isPalindrome: palindromeCheck.isPalindrome,
        isPalindromeRecursive: palindromeCheck.isPalindromeRecursive,
        firstNonRepeatingChar: firstNonRepeating.firstNonRepeatingChar,
        firstNonRepeatingCharWithChar: firstNonRepeating.firstNonRepeatingCharWithChar,
        countVowelsAndConsonants: countVowelsConsonants.countVowelsAndConsonants,
        countVowelsAndConsonantsDetailed: countVowelsConsonants.countVowelsAndConsonantsDetailed,
        lengthOfLongestSubstring: longestSubstring.lengthOfLongestSubstring,
        longestSubstring: longestSubstring.longestSubstring,
        isValidParentheses: validateParentheses.isValidParentheses,
        groupAnagrams: groupAnagrams.groupAnagrams
    },
    
    // Array algorithms
    arrays: {
        findLargestAndSmallest: largestSmallest.findLargestAndSmallest,
        findLargestAndSmallestIndices: largestSmallest.findLargestAndSmallestIndices,
        removeDuplicates: removeDuplicates.removeDuplicates,
        removeDuplicatesSorted: removeDuplicates.removeDuplicatesSorted,
        customMap: customMapFilter.customMap,
        customFilter: customMapFilter.customFilter,
        customReduce: customMapFilter.customReduce,
        mergeSortedArrays: mergeSortedArrays.mergeSortedArrays,
        mergeSortedArraysUnique: mergeSortedArrays.mergeSortedArraysUnique,
        twoSum: twoSum.twoSum,
        findMajorityElement: majorityElement.findMajorityElement,
        rotateArray: rotateArray.rotateArray,
        findIntersection: arrayIntersection.findIntersection,
        findKthLargest: kthLargest.findKthLargest
    },
    
    // Data structures
    dataStructures: {
        Stack: stack.Stack,
        FixedSizeStack: stack.FixedSizeStack,
        AdvancedStack: stack.AdvancedStack,
        QueueUsingStacks: queueUsingStacks.QueueUsingStacks,
        AdvancedQueueUsingStacks: queueUsingStacks.AdvancedQueueUsingStacks
    },
    
    // Searching algorithms
    searching: {
        binarySearch: binarySearch.binarySearch,
        binarySearchRecursive: binarySearch.binarySearchRecursive,
        binarySearchFirst: binarySearch.binarySearchFirst,
        binarySearchLast: binarySearch.binarySearchLast
    },
    
    // Sorting algorithms
    sorting: {
        bubbleSort: sortingAlgorithms.bubbleSort,
        quickSort: sortingAlgorithms.quickSort,
        mergeSort: sortingAlgorithms.mergeSort,
        selectionSort: sortingAlgorithms.selectionSort,
        insertionSort: sortingAlgorithms.insertionSort,
        heapSort: sortingAlgorithms.heapSort
    },
    
    // Linked list algorithms
    linkedLists: {
        LinkedList: linkedList.LinkedList,
        hasCycle: linkedList.hasCycle,
        detectCycle: linkedList.detectCycle,
        reverseList: linkedList.reverseList,
        reverseListRecursive: linkedList.reverseListRecursive,
        findMiddle: linkedList.findMiddle,
        mergeTwoLists: linkedList.mergeTwoLists
    },
    
    // General algorithms
    algorithms: {
        factorialIterative: factorial.factorialIterative,
        factorialRecursive: factorial.factorialRecursive,
        factorialTailRecursive: factorial.factorialTailRecursive,
        findMissingNumber: missingNumber.findMissingNumber,
        findMissingNumberXOR: missingNumber.findMissingNumberXOR,
        findMissingNumbers: missingNumber.findMissingNumbers
    }
};

// Example usage
console.log('=== DSA Solutions Index ===');
console.log('All solutions are available through the exported object.');
console.log('Example usage:');
console.log('const dsa = require("./index");');
console.log('console.log(dsa.strings.reverseString("hello"));');
console.log('console.log(dsa.arrays.findLargestAndSmallest([1, 5, 3, 9, 2]));');
console.log('console.log(dsa.algorithms.factorialIterative(5));');
